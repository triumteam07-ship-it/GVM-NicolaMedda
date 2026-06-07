import React from "react";
import { Microscope, Target, Award, ChevronRight } from "lucide-react";

const items = [
  {
    title: "Mini-invasiva percutanea",
    desc: "Tecniche chirurgiche moderne che riducono trauma, cicatrici e tempi di recupero.",
    Icon: Microscope,
  },
  {
    title: "Precisione personalizzata",
    desc: "Ogni intervento è disegnato sulla persona: clinica, funzionalità, esigenze umane.",
    Icon: Target,
  },
  {
    title: "Salvataggio articolare",
    desc: "Procedure avanzate, sino alle artrodesi percutanee, per avere sempre risposte ad ogni condizione.",
    Icon: Award,
  },
];

const Metodo = () => {
  return (
    <section
      id="approccio"
      className="py-16 sm:py-24 lg:py-32 bg-[#f4f8fa] relative"
      data-testid="approccio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl reveal in">
          <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
            Metodo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#13485F] mt-3 leading-[1.05] font-semibold">
            Un approccio fondato su precisione,
            <br />
            tecnica e ascolto.
          </h2>
          <p className="text-[#4a5a64] mt-6 leading-relaxed">
            Interventi di chirurgia mini-invasiva e procedure di salvataggio
            articolare — incluse artrodesi percutanee avanzate — con l'obiettivo
            di ridurre i tempi di recupero e migliorare la qualità di vita del
            paziente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {items.map(({ title, desc, Icon }, i) => (
            <div
              key={i}
              className="medical-card rounded-2xl p-8 reveal in"
              data-testid={`valore-card-${i}`}
            >
              <div className="h-12 w-12 rounded-xl bg-[#13485F] flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-2xl text-[#13485F] mt-6 font-semibold">
                {title}
              </h3>
              <p className="text-[#4a5a64] mt-3 leading-relaxed">{desc}</p>
              <div className="mt-6 flex items-center text-sm font-semibold text-[#1AB394]">
                Scopri di più <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metodo;
