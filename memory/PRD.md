# Dr. Nicola Medda - Landing Page

## Original Problem Statement
Landing page in Italian for Dr. Nicola Medda (Orthopedic Specialist, Ospedale Saint Charles - GVM, Bordighera). Sections: Hero, Chi è, Metodo, Patologie, Struttura, Contatti. Must match a specific reference style (palette, fonts, layout). Booking form with placeholder contacts.

## Tech Stack
- Backend: FastAPI + MongoDB (`/api/appointments` POST/GET)
- Frontend: React + TailwindCSS, custom fonts (Mulish, Cormorant Garamond)
- Language: Italian only

## Implemented (as of Feb 2026)
- All landing components (Navbar, Hero, ChiE, Metodo, Patologie, Struttura, Gallery, Contact, Footer) matching reference design
- Booking form integrated with backend `/api/appointments`
- Footer: Triumteam Studio "Powered by" logo with link to `https://triumteam-studio.preview.emergentagent.com/?utm_source=share` (target=_blank), centered, ~60px height

## Backlog
- P1: Verify responsive layout on mobile/tablet
- P1: Verify contact form styling on small screens

## Key Files
- `/app/backend/server.py`
- `/app/frontend/src/components/landing/*.jsx`

## DB Schema
- `appointments`: {nome, cognome, email, telefono, messaggio, consenso, created_at}
