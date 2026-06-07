"""Backend tests for Dr. Nicola Medda landing page API.

Covers:
- Health/root endpoint
- POST /api/appointments (validation + happy path)
- GET /api/appointments (listing + persistence verification)
"""
import os
import uuid
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[2] / 'frontend' / '.env')

BASE_URL = os.environ['REACT_APP_BACKEND_URL'].rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
class TestHealth:
    def test_api_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Medda" in data["message"]


# --- Appointments ---
class TestAppointments:
    def _payload(self, **overrides):
        unique = uuid.uuid4().hex[:8]
        base = {
            "nome": "TEST_Mario",
            "cognome": f"TEST_Rossi_{unique}",
            "email": f"test_{unique}@example.com",
            "telefono": "+39 333 1234567",
            "patologia": "Fascite plantare",
            "data_preferita": "2026-02-15",
            "messaggio": "Vorrei una visita di controllo.",
            "consenso": True,
        }
        base.update(overrides)
        return base

    def test_create_appointment_requires_consenso(self, session):
        r = session.post(f"{API}/appointments", json=self._payload(consenso=False))
        assert r.status_code == 400
        data = r.json()
        assert "Consenso" in data.get("detail", "") or "consenso" in data.get("detail", "").lower()

    def test_create_appointment_invalid_email(self, session):
        r = session.post(f"{API}/appointments", json=self._payload(email="not-an-email"))
        # FastAPI/Pydantic returns 422 for validation errors
        assert r.status_code == 422

    def test_create_appointment_missing_required(self, session):
        bad = self._payload()
        del bad["nome"]
        r = session.post(f"{API}/appointments", json=bad)
        assert r.status_code == 422

    def test_create_appointment_happy_path_and_persistence(self, session):
        payload = self._payload()
        r = session.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()

        # Validate response structure
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["nome"] == payload["nome"]
        assert data["cognome"] == payload["cognome"]
        assert data["email"] == payload["email"]
        assert data["telefono"] == payload["telefono"]
        assert data["patologia"] == payload["patologia"]
        assert data["data_preferita"] == payload["data_preferita"]
        assert data["messaggio"] == payload["messaggio"]
        assert data["consenso"] is True
        assert "created_at" in data
        # _id should not be exposed
        assert "_id" not in data

        appt_id = data["id"]

        # GET list to verify persistence
        r2 = session.get(f"{API}/appointments")
        assert r2.status_code == 200
        items = r2.json()
        assert isinstance(items, list)
        ids = [it["id"] for it in items]
        assert appt_id in ids, "Created appointment not found in GET listing"
        # _id excluded from listing
        for it in items:
            assert "_id" not in it

    def test_create_appointment_minimal_fields(self, session):
        # Only required fields
        unique = uuid.uuid4().hex[:8]
        payload = {
            "nome": "TEST_Anna",
            "cognome": f"TEST_Bianchi_{unique}",
            "email": f"anna_{unique}@example.com",
            "consenso": True,
        }
        r = session.post(f"{API}/appointments", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["nome"] == payload["nome"]
        assert data["telefono"] == ""
        assert data["patologia"] == ""
        assert data["messaggio"] == ""
