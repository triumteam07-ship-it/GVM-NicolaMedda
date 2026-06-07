import React from "react";

const patologie = [
  {
    title: "Fascite plantare",
    desc: "Diagnosi e terapia mirata alla guarigione del tessuto fasciale.",
  },
  {
    title: "Metatarsalgie",
    desc: "Trattamento del dolore plantare anteriore con tecniche conservative o chirurgiche mini invasive e percutanee.",
  },
  {
    title: "Tendinopatie",
    desc: "Patologie tendinee acute e croniche con protocolli scientificamente validati.",
  },
  {
    title: "Neuroma di Civinini-Morton",
    desc: "Risoluzione precisa con approcci conservativi e chirurgici.",
  },
  {
    title: "Sindrome del tunnel tarsale",
    desc: "Decompressione del nervo tibiale posteriore.",
  },
  {
    title: "Malattia di Taylor",
    desc: "Correzione percutanea della deformità del quinto metatarso varo primitivo.",
  },
  {
    title: "Artrosi piede e caviglia",
    desc: "Soluzioni conservative, artrodesi mininvasive personalizzate.",
  },
  {
    title: "Osteoporosi e algodistrofia",
    desc: "Gestione integrata delle patologie ossee degenerative.",
  },
  {
    title: "Deformità delle dita",
    desc: "Alluce valgo, alluce varo, alluce rigido artrosico.",
  },
  {
    title: "Dita a martello, ad artiglio, en griffe",
    desc: "Correzione mininvasiva delle deformità delle dita minori.",
  },
  {
    title: "Malattia di Haglund",
    desc: "Trattamento dell'esostosi calcaneare posteriore con approccio dedicato.",
  },
  {
    title: "Lesioni complete tendinee",
    desc: "Riparazione chirurgica di lesioni tendinee complete acute e croniche.",
  },
  {
    title: "Deformità post traumatiche",
    desc: "Correzione di esiti traumatici complessi di piede e caviglia.",
  },
  {
    title: "Rimozione mezzi di sintesi",
    desc: "Rimozione di viti, placche e chiodi con tecniche dedicate.",
  },
];

const Patologie = () => {
  return (
    <section id="patologie" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">
              Patologie trattate
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a2942]">
              Aree d'eccellenza <br />
              <span className="italic font-light">
                nella cura del piede e della caviglia.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <p className="text-base md:text-lg leading-relaxed text-[#1a2942]/75 font-light">
              Ogni percorso terapeutico è costruito sulle specifiche esigenze del
              paziente, con metodiche moderne e validate scientificamente. Dalle
              patologie più comuni ai casi complessi, ogni condizione trova una
              risposta dedicata.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#1a2942]/10 border border-[#1a2942]/10">
          {patologie.map((p, i) => (
            <div
              key={i}
              className="bg-[#f6f1ea] p-8 hover:bg-white transition-colors duration-300 group"
              data-testid={`patologia-card-${i}`}
            >
              <div className="font-serif text-sm text-[#c98a3f] mb-4">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-[#1a2942] leading-snug">
                {p.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#1a2942]/70 font-light">
                {p.desc}
              </p>
              <div className="mt-6 h-px w-8 bg-[#c98a3f] group-hover:w-16 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patologie;
