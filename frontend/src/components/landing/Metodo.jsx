import React from "react";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Mini-invasiva percutanea",
    desc: "Tecniche chirurgiche moderne che riducono trauma, cicatrici e tempi di recupero.",
  },
  {
    title: "Precisione personalizzata",
    desc: "Ogni intervento è disegnato sulla persona: clinica, funzionalità, esigenze umane.",
  },
  {
    title: "Salvataggio articolare",
    desc: "Procedure avanzate, sino alle artrodesi percutanee, per avere sempre risposte ad ogni condizione.",
  },
];

const Metodo = () => {
  return (
    <section
      id="metodo"
      className="py-24 lg:py-32 bg-[#1a2942] text-[#f6f1ea] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-end mb-20">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">
              Metodo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Un approccio fondato su precisione, <br />
              <span className="italic font-light">tecnica e ascolto.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg leading-relaxed text-[#f6f1ea]/75 font-light">
              Interventi di chirurgia mini-invasiva e procedure di salvataggio
              articolare — incluse artrodesi percutanee avanzate — con l'obiettivo di
              ridurre i tempi di recupero e migliorare la qualità di vita del paziente.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#f6f1ea]/15">
          {items.map((it, i) => (
            <div
              key={i}
              className="bg-[#1a2942] p-10 lg:p-12 group hover:bg-[#22324f] transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-serif text-2xl text-[#c98a3f]">
                  0{i + 1}
                </span>
                <ArrowUpRight
                  className="text-[#f6f1ea]/40 group-hover:text-[#c98a3f] group-hover:rotate-45 transition-all duration-500"
                  size={22}
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#f6f1ea]">
                {it.title}
              </h3>
              <p className="mt-5 text-sm md:text-base leading-relaxed text-[#f6f1ea]/70 font-light">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodo;
