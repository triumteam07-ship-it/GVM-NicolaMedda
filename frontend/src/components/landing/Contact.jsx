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

const inputClass =
  "form-input mt-2 h-11 w-full rounded-lg border border-[#13485F]/15 bg-transparent px-3 py-1 text-sm text-[#13485F] shadow-sm placeholder:text-[#8a96a0] transition-colors";

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
      toast.success("Richiesta inviata. La segreteria la ricontatterà a breve.", {
        duration: 5000,
      });
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
      className="py-16 sm:py-24 lg:py-32 bg-[#f4f8fa]"
      data-testid="prenotazione"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5 reveal in">
          <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
            Prenota la sua visita
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#13485F] mt-3 leading-[1.05] font-semibold">
            Parliamone insieme.
          </h2>
          <p className="text-[#4a5a64] mt-6 leading-relaxed">
            Compili il modulo: la segreteria del reparto la ricontatterà per
            concordare data e modalità della prima visita ortopedica.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow Icon={MapPin} title="Ospedale Saint Charles" value="Via Generale Cantore 39 — Bordighera (IM)" />
            <ContactRow
              Icon={Phone}
              title="Centro Unico Prenotazioni"
              value="+39 0184 543000"
              href="tel:+390184543000"
              testid="contact-phone"
            />
            <ContactRow
              Icon={Mail}
              title="Email segreteria"
              value="saintcharles@gvmnet.it"
              href="mailto:saintcharles@gvmnet.it"
              testid="contact-email"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          data-testid={CONTACT.formRoot}
          className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#13485F]/10 shadow-[0_30px_80px_-40px_rgba(19,72,95,0.25)] reveal in"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nome" name="nome" value={form.nome} onChange={handleChange} required testid={CONTACT.inputNome} />
            <Field label="Cognome" name="cognome" value={form.cognome} onChange={handleChange} required testid={CONTACT.inputCognome} />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required testid={CONTACT.inputEmail} />
            <Field label="Telefono" name="telefono" type="tel" value={form.telefono} onChange={handleChange} testid={CONTACT.inputTelefono} />

            <div className="sm:col-span-2">
              <label className="text-[#13485F] text-sm font-semibold">
                Patologia di interesse
              </label>
              <select
                name="patologia"
                value={form.patologia}
                onChange={handleChange}
                data-testid={CONTACT.selectPatologia}
                className={inputClass + " bg-white"}
              >
                <option value="">Seleziona una patologia</option>
                {patologie.map((p) => (
                  <option key={p} value={p}>
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
              full
            />

            <div className="sm:col-span-2">
              <label className="text-[#13485F] text-sm font-semibold">Messaggio</label>
              <textarea
                name="messaggio"
                rows={4}
                value={form.messaggio}
                onChange={handleChange}
                data-testid={CONTACT.inputMessaggio}
                placeholder="Descriva brevemente il motivo della visita..."
                className="form-input mt-2 w-full rounded-lg border border-[#13485F]/15 bg-transparent px-3 py-2 text-sm text-[#13485F] placeholder:text-[#8a96a0] resize-none"
              />
            </div>

            <div className="sm:col-span-2 flex items-start gap-3">
              <input
                type="checkbox"
                name="consenso"
                id="consenso"
                checked={form.consenso}
                onChange={handleChange}
                data-testid={CONTACT.checkboxConsenso}
                className="mt-1 h-4 w-4 accent-[#13485F]"
              />
              <label htmlFor="consenso" className="text-xs text-[#4a5a64] leading-relaxed">
                Acconsento al trattamento dei miei dati personali ai sensi del
                Reg. UE 2016/679 per finalità di gestione della richiesta di
                appuntamento.
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            data-testid={CONTACT.submitBtn}
            className="btn-primary mt-7 w-full h-12 rounded-full text-sm font-semibold disabled:opacity-60"
          >
            {submitting ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactRow = ({ Icon, title, value, href, testid }) => (
  <div className="flex items-start gap-4">
    <div className="h-11 w-11 rounded-lg bg-white border border-[#13485F]/10 flex items-center justify-center shrink-0">
      <Icon className="h-5 w-5 text-[#13485F]" />
    </div>
    <div>
      <p className="text-sm font-semibold text-[#13485F]">{title}</p>
      {href ? (
        <a
          href={href}
          data-testid={testid}
          className="text-sm text-[#4a5a64] hover:text-[#13485F]"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm text-[#4a5a64]">{value}</p>
      )}
    </div>
  </div>
);

const Field = ({ label, name, type = "text", value, onChange, required, testid, full }) => (
  <div className={full ? "sm:col-span-2" : ""}>
    <label htmlFor={name} className="text-[#13485F] text-sm font-semibold">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      data-testid={testid}
      className={inputClass}
    />
  </div>
);

export default Contact;
