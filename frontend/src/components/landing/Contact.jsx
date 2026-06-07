import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CONTACT } from "@/constants/testIds";
import { MapPin, Phone, Mail } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const patologie = [
  "Fascite plantare",
  "Metatarsalgie",
  "Tendinopatie",
  "Neuroma di Civinini-Morton",
  "Sindrome del tunnel tarsale",
  "Malattia di Taylor",
  "Artrosi piede e caviglia",
  "Osteoporosi e algodistrofia",
  "Deformità delle dita (alluce valgo / varo / rigido)",
  "Dita a martello, ad artiglio, en griffe",
  "Malattia di Haglund",
  "Lesioni complete tendinee",
  "Deformità post traumatiche",
  "Rimozione mezzi di sintesi",
  "Altro / Da definire",
];

const initialForm = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  patologia: "",
  data_preferita: "",
  messaggio: "",
  consenso: false,
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consenso) {
      toast.error("È necessario acconsentire al trattamento dei dati personali.");
      return;
    }
    if (!form.nome || !form.cognome || !form.email) {
      toast.error("Compila i campi obbligatori: nome, cognome ed email.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/appointments`, form);
      toast.success(
        "Richiesta inviata. La segreteria la ricontatterà a breve.",
        { duration: 5000 }
      );
      setForm(initialForm);
    } catch (err) {
      toast.error(
        "Impossibile inviare la richiesta. Riprovi più tardi o contatti la segreteria."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="prenota"
      className="py-24 lg:py-32 bg-[#1a2942] text-[#f6f1ea]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">
              Prenota la sua visita
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Parliamone <span className="italic font-light">insieme.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-[#f6f1ea]/75 font-light">
              Compili il modulo: la segreteria del reparto la ricontatterà per
              concordare data e modalità della prima visita ortopedica.
            </p>

            <div className="mt-12 space-y-7">
              <div className="flex gap-4">
                <MapPin className="text-[#c98a3f] mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-1">
                    Ospedale Saint Charles
                  </div>
                  <div className="text-base font-light">
                    Via Generale Cantore 39 — Bordighera (IM)
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#c98a3f] mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-1">
                    Centro Unico Prenotazioni
                  </div>
                  <a
                    href="tel:+390184543000"
                    className="text-base font-light hover:text-[#c98a3f] transition-colors"
                  >
                    +39 0184 543000
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#c98a3f] mt-1 shrink-0" size={20} />
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-1">
                    Email segreteria
                  </div>
                  <a
                    href="mailto:saintcharles@gvmnet.it"
                    className="text-base font-light hover:text-[#c98a3f] transition-colors"
                  >
                    saintcharles@gvmnet.it
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              data-testid={CONTACT.formRoot}
              className="bg-[#22324f] p-8 md:p-10 border border-[#f6f1ea]/10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Nome*"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  testid={CONTACT.inputNome}
                />
                <Field
                  label="Cognome*"
                  name="cognome"
                  value={form.cognome}
                  onChange={handleChange}
                  testid={CONTACT.inputCognome}
                />
                <Field
                  label="Email*"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  testid={CONTACT.inputEmail}
                />
                <Field
                  label="Telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  testid={CONTACT.inputTelefono}
                />

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-2">
                    Patologia di interesse
                  </label>
                  <select
                    name="patologia"
                    value={form.patologia}
                    onChange={handleChange}
                    data-testid={CONTACT.selectPatologia}
                    className="w-full bg-transparent border-b border-[#f6f1ea]/30 text-[#f6f1ea] py-3 focus:outline-none focus:border-[#c98a3f] transition-colors"
                  >
                    <option value="" className="bg-[#22324f]">
                      Seleziona una patologia
                    </option>
                    {patologie.map((p) => (
                      <option key={p} value={p} className="bg-[#22324f]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <Field
                  label="Data preferita (opzionale)"
                  name="data_preferita"
                  type="date"
                  value={form.data_preferita}
                  onChange={handleChange}
                  testid={CONTACT.inputData}
                />

                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-2">
                    Messaggio
                  </label>
                  <textarea
                    name="messaggio"
                    rows={4}
                    value={form.messaggio}
                    onChange={handleChange}
                    data-testid={CONTACT.inputMessaggio}
                    className="w-full bg-transparent border-b border-[#f6f1ea]/30 text-[#f6f1ea] py-3 focus:outline-none focus:border-[#c98a3f] transition-colors resize-none placeholder:text-[#f6f1ea]/30"
                    placeholder="Ci racconti brevemente la sua situazione..."
                  />
                </div>

                <label className="sm:col-span-2 flex items-start gap-3 mt-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consenso"
                    checked={form.consenso}
                    onChange={handleChange}
                    data-testid={CONTACT.checkboxConsenso}
                    className="mt-1 accent-[#c98a3f]"
                  />
                  <span className="text-xs leading-relaxed text-[#f6f1ea]/65 font-light">
                    Acconsento al trattamento dei miei dati personali ai sensi del
                    Reg. UE 2016/679 per finalità di gestione della richiesta di
                    appuntamento.
                  </span>
                </label>

                <div className="sm:col-span-2 mt-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid={CONTACT.submitBtn}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#c98a3f] text-[#1a2942] font-medium text-sm tracking-[0.15em] uppercase hover:bg-[#f6f1ea] transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Invio in corso..." : "Invia richiesta"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", value, onChange, testid }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.22em] text-[#f6f1ea]/55 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      data-testid={testid}
      className="w-full bg-transparent border-b border-[#f6f1ea]/30 text-[#f6f1ea] py-3 focus:outline-none focus:border-[#c98a3f] transition-colors placeholder:text-[#f6f1ea]/30"
    />
  </div>
);

export default Contact;
