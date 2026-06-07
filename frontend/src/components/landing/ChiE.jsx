import React from "react";

const competenze = [
  {
    title: "Patologie osteo-articolari",
    desc: "Diagnosi e trattamento delle principali condizioni dell'apparato locomotore del piede e della caviglia.",
  },
  {
    title: "Patologie tendinee",
    desc: "Approccio dedicato a entesiti, lesioni degenerative e fascia plantare.",
  },
  {
    title: "Patologie legamentose",
    desc: "Cura delle instabilità e delle lesioni croniche della caviglia.",
  },
  {
    title: "Patologie neurologiche periferiche",
    desc: "Soluzioni mininvasive per neuromi e sindromi compressive.",
  },
];

const ChiE = () => {
  return (
    <section id="chi" className="py-24 lg:py-32 border-t border-[#1a2942]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">Chi è</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a2942]">
              Una mano esperta, <br />
              <span className="italic font-light">una mente che ascolta.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-8">
            <p className="text-base md:text-lg leading-relaxed text-[#1a2942]/80 font-light">
              Specialista in{" "}
              <strong className="font-medium text-[#1a2942]">
                Ortopedia, Traumatologia e Trapianti d'Organo
              </strong>
              , il Dr. Nicola Medda è altamente specializzato nella chirurgia
              mini-invasiva percutanea del piede e della caviglia con{" "}
              <strong className="font-medium text-[#c98a3f]">
                oltre 10.000 interventi eseguiti
              </strong>
              .
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#1a2942]/80 font-light">
              Il suo lavoro è orientato all'innovazione, alla precisione chirurgica e
              alla personalizzazione del trattamento — sempre con uno sguardo attento
              agli aspetti clinici, funzionali e umani del paziente.
            </p>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.22em] text-[#1a2942]/55 mb-6">
                Aree di competenza
              </p>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {competenze.map((c, i) => (
                  <div key={i} className="border-t border-[#1a2942]/15 pt-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-sm text-[#c98a3f]">
                        0{i + 1}
                      </span>
                      <h3 className="font-serif text-xl text-[#1a2942]">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#1a2942]/70 font-light">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiE;
