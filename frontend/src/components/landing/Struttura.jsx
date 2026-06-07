import React from "react";
import { HOME } from "@/constants/testIds";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "50+ anni di GVM",
    desc: "Uno dei principali gruppi ospedalieri italiani, presente in Italia e all'estero.",
  },
  {
    title: "Eccellenza accreditata",
    desc: "Centro d'eccellenza per ortopedia, traumatologia e chirurgia del piede.",
  },
  {
    title: "Cura della persona",
    desc: "Un approccio integrato che mette al centro il paziente e la sua qualità di vita.",
  },
  {
    title: "Riviera dei Fiori",
    desc: "Struttura immersa nella luce del Mediterraneo, a pochi passi dal mare di Bordighera.",
  },
];

const Struttura = () => {
  return (
    <section
      id="struttura"
      className="py-24 lg:py-32 border-t border-[#1a2942]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">
              La struttura
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a2942]">
              Ospedale Saint Charles <br />
              <span className="italic font-light">
                una casa di cura d'eccellenza.
              </span>
            </h2>

            <p className="mt-8 text-base md:text-lg leading-relaxed text-[#1a2942]/80 font-light">
              Il Dr. Medda esercita presso l'
              <strong className="font-medium text-[#1a2942]">
                Ospedale Saint Charles di Bordighera
              </strong>
              , struttura del gruppo{" "}
              <strong className="font-medium text-[#1a2942]">
                GVM Care &amp; Research
              </strong>
              : uno dei principali poli ospedalieri italiani, riconosciuto a livello
              internazionale per qualità clinica, ricerca e innovazione tecnologica.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                data-testid={HOME.visitaSaintCharles}
                href="https://www.gvmnet.it/strutture-sanitarie/ospedale-saint-charles-bordighera/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a2942] text-[#f6f1ea] text-sm tracking-wide hover:bg-[#c98a3f] transition-colors"
              >
                Visita Saint Charles
                <ArrowUpRight size={16} />
              </a>
              <a
                data-testid={HOME.visitaGvm}
                href="https://www.gvmnet.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1a2942]/30 text-[#1a2942] text-sm tracking-wide hover:border-[#c98a3f] hover:text-[#c98a3f] transition-colors"
              >
                Gruppo GVM Care &amp; Research
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#1a2942]/10 p-8 hover:border-[#c98a3f]/50 transition-all duration-500"
                >
                  <div className="font-serif text-sm text-[#c98a3f] mb-3">
                    0{i + 1}
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#1a2942] leading-snug">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1a2942]/70 font-light">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-[#c98a3f] pl-6 py-2">
              <p className="font-serif text-xl md:text-2xl italic text-[#1a2942] leading-snug">
                "Una rete di strutture sanitarie d'eccellenza in Italia e nel mondo,
                con un'unica missione: prendersi cura della persona."
              </p>
              <footer className="mt-4 text-xs uppercase tracking-[0.22em] text-[#1a2942]/60">
                Saint Charles — parte del network GVM dal 2010
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struttura;
