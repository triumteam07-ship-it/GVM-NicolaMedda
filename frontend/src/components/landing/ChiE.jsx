import React from "react";
import { Bone, Activity, Hand, Microscope } from "lucide-react";

const cards = [
  {
    title: "Patologie osteo-articolari",
    desc: "Diagnosi e trattamento delle principali condizioni dell'apparato locomotore del piede e della caviglia.",
    Icon: Bone,
  },
  {
    title: "Patologie tendinee",
    desc: "Approccio dedicato a entesiti, lesioni degenerative e fascia plantare.",
    Icon: Activity,
  },
  {
    title: "Patologie legamentose",
    desc: "Cura delle instabilità e delle lesioni croniche della caviglia.",
    Icon: Hand,
  },
  {
    title: "Patologie neurologiche periferiche",
    desc: "Soluzioni mininvasive per neuromi e sindromi compressive.",
    Icon: Microscope,
  },
];

const ChiE = () => {
  return (
    <section id="chi-sono" className="py-16 sm:py-24 lg:py-32" data-testid="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-5 reveal in">
          <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
            Chi è
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#13485F] mt-3 leading-[1.05] font-semibold">
            Una mano esperta,
            <br />
            una mente che ascolta.
          </h2>
          <div className="shimmer-line h-px w-24 mt-7" />
          <p className="text-[#4a5a64] mt-7 leading-relaxed">
            Specialista in{" "}
            <strong className="text-[#13485F]">
              Ortopedia, Traumatologia e Trapianti d'Organo
            </strong>
            , il Dr. Nicola Medda è altamente specializzato nella chirurgia
            mini-invasiva percutanea del piede e della caviglia con{" "}
            <strong className="text-[#13485F]">oltre 10.000 interventi eseguiti</strong>.
          </p>
          <p className="text-[#4a5a64] mt-4 leading-relaxed">
            Il suo lavoro è orientato all'innovazione, alla precisione chirurgica e
            alla personalizzazione del trattamento — sempre con uno sguardo attento
            agli aspetti clinici, funzionali e umani del paziente.
          </p>
        </div>

        <div className="lg:col-span-7 reveal in">
          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map(({ title, desc, Icon }, i) => (
              <div key={i} className="medical-card rounded-2xl p-7">
                <Icon className="h-7 w-7 text-[#1AB394]" />
                <h3 className="font-display text-2xl text-[#13485F] mt-4 font-semibold">
                  {title}
                </h3>
                <p className="text-sm text-[#4a5a64] mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiE;
