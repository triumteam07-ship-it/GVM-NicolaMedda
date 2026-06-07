# PRD — Dr. Nicola Medda · Landing Page Ortopedia Bordighera

## Original Problem Statement
Modificare landing page (riferimento: dr-medda-ortopedia.preview.emergentagent.com) con testi aggiornati per Dr. Nicola Medda — Specialista in Ortopedia · Bordighera, chirurgia mini-invasiva percutanea del piede e della caviglia. Aggiungere sezione contatti/prenotazione con form. Solo lingua italiana, placeholder per contatti.

## User Choices
- Modalità: mantenere struttura/design, correggere il testo
- Sezioni: aggiungere form prenotazione
- Contatti: placeholder
- Immagini: invariate
- Lingua: solo italiano

## Architecture
- **Frontend**: React 19 + Tailwind + shadcn/ui (sonner per toast) — single page con componenti modulari
- **Backend**: FastAPI + Motor (MongoDB) — endpoint `/api/appointments` (POST/GET)
- **DB Collections**: `appointments` (id, nome, cognome, email, telefono, patologia, data_preferita, messaggio, consenso, created_at)

## Implemented (Dec 2025)
- Landing page con 8 sezioni: Navbar (sticky, mobile menu), Hero (Dr. Medda + statistiche 30+ / 10.000+ / Mini), Chi è (4 aree competenza), Metodo (3 pillars), Patologie (14 cards), Struttura Saint Charles (4 features + quote), Gallery (4 immagini chirurgia), Prenota (form completo), Footer
- Form prenotazione con validazione consenso, toast feedback (sonner)
- Backend endpoint `/api/appointments` con validazione email + consenso obbligatorio
- Font: Cormorant Garamond (serif editoriale) + Inter (sans)
- Palette: cream `#f6f1ea` / navy `#1a2942` / accent oro `#c98a3f`
- All data-testid documentati in `constants/testIds/home.js` (HOME.*, CONTACT.*)

## Testing
- Backend: 6/6 pytest pass
- Frontend: tutti i flow critici verificati (testing_agent iteration_1)

## P1 Backlog (optional)
- Sostituire `<input type="date">` nativo con shadcn Calendar/DatePicker IT locale
- Lock `CORS_ORIGINS` al dominio produzione
- Admin dashboard per visualizzare appointments salvati
- Integrazione email (Resend/SendGrid) per notifica segreteria

## P2 Backlog
- Multilingua IT/EN/FR per turisti Riviera
- SEO meta tags + Schema.org Physician markup
- Sezione testimonianze pazienti
