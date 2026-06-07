import React from "react";
import { HOME } from "@/constants/testIds";
import { Award, ShieldCheck, Heart, MapPin, ArrowRight, Quote } from "lucide-react";

const features = [
  {
    title: "50+ anni di GVM",
    desc: "Uno dei principali gruppi ospedalieri italiani, presente in Italia e all'estero.",
    Icon: Award,
  },
  {
    title: "Eccellenza accreditata",
    desc: "Centro d'eccellenza per ortopedia, traumatologia e chirurgia del piede.",
    Icon: ShieldCheck,
  },
  {
    title: "Cura della persona",
    desc: "Un approccio integrato che mette al centro il paziente e la sua qualità di vita.",
    Icon: Heart,
  },
  {
    title: "Riviera dei Fiori",
    desc: "Una struttura immersa nella luce del Mediterraneo, a pochi passi dal mare di Bordighera.",
    Icon: MapPin,
  },
];

const Struttura = () => {
  return (
    <section
      id="ospedale"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      data-testid="ospedale"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, rgb(244,248,250) 0%, rgb(255,255,255) 50%, rgb(234,244,241) 100%)",
        }}
      />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 reveal in">
            <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
              La struttura
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#13485F] mt-3 leading-[1.05] font-semibold">
              Ospedale Saint Charles
              <br />
              <span className="italic font-normal text-[#1AB394]">
                una casa di cura d'eccellenza.
              </span>
            </h2>
            <div className="shimmer-line h-px w-24 mt-7" />
            <p className="text-[#4a5a64] mt-7 leading-relaxed">
              Il Dr. Medda esercita presso l'
              <strong className="text-[#13485F]">
                Ospedale Saint Charles di Bordighera
              </strong>
              , struttura del gruppo{" "}
              <strong className="text-[#13485F]">GVM Care &amp; Research</strong>:
              uno dei principali poli ospedalieri italiani, riconosciuto a livello
              internazionale per qualità clinica, ricerca e innovazione tecnologica.
            </p>
            <p className="text-[#4a5a64] mt-4 leading-relaxed">
              Una sinergia tra alta specializzazione medica, tecnologie all'avanguardia
              e l'attenzione umana che da sempre contraddistingue GVM.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                data-testid={HOME.visitaSaintCharles}
                href="https://www.gvmnet.it/strutture-sanitarie/ospedale-saint-charles-bordighera/home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              >
                Visita Saint Charles <ArrowRight className="h-4 w-4" />
              </a>
              <a
                data-testid={HOME.visitaGvm}
                href="https://www.gvmnet.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
              >
                Gruppo GVM Care &amp; Research
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 reveal in">
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map(({ title, desc, Icon }, i) => (
                <div
                  key={i}
                  className="medical-card rounded-2xl p-7 relative overflow-hidden"
                  data-testid={`ospedale-card-${i}`}
                >
                  <div
                    className="absolute -top-8 -right-8 h-24 w-24 rounded-full opacity-10"
                    style={{ background: i % 2 ? "#1AB394" : "#13485F" }}
                  />
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ background: "#13485F" }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl text-[#13485F] mt-5 font-semibold leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[#4a5a64] mt-2 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-6 rounded-2xl p-7 relative overflow-hidden"
              style={{ background: "#13485F" }}
            >
              <Quote className="absolute top-5 right-6 h-12 w-12 text-white/10" />
              <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
                GVM Care &amp; Research
              </p>
              <p className="font-display text-2xl text-white mt-3 italic leading-snug">
                "Una rete di strutture sanitarie d'eccellenza in Italia e nel
                mondo, con un'unica missione: prendersi cura della persona."
              </p>
              <div className="mt-5 flex items-center gap-3 text-white/75 text-sm">
                <ShieldCheck className="h-4 w-4 text-[#1AB394]" />
                Saint Charles, parte del network GVM dal 2010
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struttura;
