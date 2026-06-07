import React from "react";
import { HOME } from "@/constants/testIds";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/p0snja9t_8.jpeg";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-8">
            Specialista in Ortopedia · Bordighera
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-[#1a2942]">
            Dr. Nicola Medda
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 italic font-light text-[#1a2942]/75">
              chirurgia mini-invasiva del piede e della caviglia
            </span>
          </h1>

          <p className="mt-10 text-base md:text-lg leading-relaxed text-[#1a2942]/75 max-w-2xl font-light">
            Innovazione, precisione chirurgica e percorsi terapeutici costruiti
            sulla persona. Dalla diagnosi al recupero, ogni paziente è seguito con un
            approccio professionale, accurato e profondamente umano.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              data-testid={HOME.heroCtaPrenota}
              href="#prenota"
              className="px-8 py-4 rounded-full bg-[#1a2942] text-[#f6f1ea] text-sm tracking-[0.15em] uppercase hover:bg-[#c98a3f] transition-colors duration-300"
            >
              Prenota una visita
            </a>
            <a
              data-testid={HOME.heroCtaPatologie}
              href="#patologie"
              className="px-8 py-4 rounded-full border border-[#1a2942]/40 text-[#1a2942] text-sm tracking-[0.15em] uppercase hover:border-[#c98a3f] hover:text-[#c98a3f] transition-colors duration-300"
            >
              Esplora le patologie trattate
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-[#1a2942]/15 pt-10">
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#1a2942]">30+</div>
              <div className="text-xs uppercase tracking-[0.18em] mt-2 text-[#1a2942]/60">
                Anni di esperienza
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#1a2942]">10.000+</div>
              <div className="text-xs uppercase tracking-[0.18em] mt-2 text-[#1a2942]/60">
                Interventi eseguiti
              </div>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-[#1a2942]">Mini</div>
              <div className="text-xs uppercase tracking-[0.18em] mt-2 text-[#1a2942]/60">
                Invasiva percutanea
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={HERO_IMG}
              alt="Dr. Nicola Medda in sala operatoria"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-[#1a2942]/15" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#f6f1ea] border border-[#1a2942]/15 px-6 py-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#1a2942]/60">
              In sala operatoria
            </div>
            <div className="font-serif text-lg text-[#1a2942] mt-1">
              Ospedale Saint Charles · GVM
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <div className="flex flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.22em] text-[#1a2942]/55 font-medium">
          <span>Ortopedia</span>
          <span className="text-[#c98a3f]">·</span>
          <span>Traumatologia</span>
          <span className="text-[#c98a3f]">·</span>
          <span>Trapianti d'Organo</span>
          <span className="text-[#c98a3f]">·</span>
          <span>Chirurgia mini-invasiva percutanea</span>
          <span className="text-[#c98a3f]">·</span>
          <span>Salvataggio articolare</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
