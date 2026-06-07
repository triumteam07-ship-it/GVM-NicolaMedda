import React from "react";
import {
  Activity,
  Bone,
  Heart,
  Target,
  Microscope,
  Hand,
  Sparkles,
  ShieldCheck,
  Wrench,
  Footprints,
  TrendingUp,
  Scissors,
  Bandage,
  Settings,
} from "lucide-react";

const patologie = [
  {
    title: "Fascite plantare",
    desc: "Diagnosi e terapia mirata alla guarigione del tessuto fasciale.",
    Icon: Activity,
  },
  {
    title: "Metatarsalgie",
    desc: "Trattamento del dolore plantare anteriore con tecniche conservative o chirurgiche mini invasive e percutanee.",
    Icon: Bone,
  },
  {
    title: "Tendinopatie",
    desc: "Patologie tendinee acute e croniche con protocolli scientificamente validati.",
    Icon: Heart,
  },
  {
    title: "Neuroma di Civinini-Morton",
    desc: "Risoluzione precisa con approcci conservativi e chirurgici.",
    Icon: Target,
  },
  {
    title: "Sindrome del tunnel tarsale",
    desc: "Decompressione del nervo tibiale posteriore.",
    Icon: Microscope,
  },
  {
    title: "Malattia di Taylor",
    desc: "Correzione percutanea della deformità del quinto metatarso varo primitivo.",
    Icon: Hand,
  },
  {
    title: "Artrosi piede e caviglia",
    desc: "Soluzioni conservative, artrodesi mininvasive personalizzate.",
    Icon: Sparkles,
  },
  {
    title: "Osteoporosi e algodistrofia",
    desc: "Gestione integrata delle patologie ossee degenerative.",
    Icon: ShieldCheck,
  },
  {
    title: "Deformità delle dita",
    desc: "Alluce valgo, alluce varo, alluce rigido artrosico.",
    Icon: Footprints,
  },
  {
    title: "Dita a martello, ad artiglio, en griffe",
    desc: "Correzione mininvasiva delle deformità delle dita minori.",
    Icon: TrendingUp,
  },
  {
    title: "Malattia di Haglund",
    desc: "Trattamento dell'esostosi calcaneare posteriore con approccio dedicato.",
    Icon: Bandage,
  },
  {
    title: "Lesioni complete tendinee",
    desc: "Riparazione chirurgica di lesioni tendinee complete acute e croniche.",
    Icon: Scissors,
  },
  {
    title: "Deformità post traumatiche",
    desc: "Correzione di esiti traumatici complessi di piede e caviglia.",
    Icon: Wrench,
  },
  {
    title: "Rimozione mezzi di sintesi",
    desc: "Rimozione di viti, placche e chiodi con tecniche dedicate.",
    Icon: Settings,
  },
];

const Patologie = () => {
  return (
    <section id="patologie" className="py-16 sm:py-24 lg:py-32" data-testid="patologie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl reveal in">
            <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
              Patologie trattate
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#13485F] mt-3 leading-[1.05] font-semibold">
              Aree d'eccellenza
              <br />
              nella cura del piede e della caviglia.
            </h2>
          </div>
          <p className="text-[#4a5a64] max-w-md reveal in">
            Ogni percorso terapeutico è costruito sulle specifiche esigenze del
            paziente, con metodiche moderne e validate scientificamente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {patologie.map(({ title, desc, Icon }, i) => (
            <div
              key={i}
              className="medical-card rounded-xl p-6 reveal in"
              data-testid={`patologia-card-${i}`}
            >
              <div className="h-10 w-10 rounded-lg bg-[#1AB394]/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-[#1AB394]" />
              </div>
              <h3 className="font-display text-xl text-[#13485F] mt-5 font-semibold leading-snug">
                {title}
              </h3>
              <p className="text-sm text-[#4a5a64] mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patologie;
