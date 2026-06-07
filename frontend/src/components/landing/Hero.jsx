import React from "react";
import { HOME } from "@/constants/testIds";
import { ArrowRight, Award, CircleCheck } from "lucide-react";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/p0snja9t_8.jpeg";

const trust = [
  "Chirurgia mini-invasiva percutanea",
  "Protocolli scientificamente validati",
  "Trattamenti personalizzati",
  "Recupero post-operatorio rapido",
  "Salvataggio articolare avanzato",
];

const Hero = () => {
  return (
    <>
      <section
        id="top"
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 overflow-hidden teal-glow"
        data-testid="hero"
      >
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          <div className="lg:col-span-7 reveal in">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#1AB394]/30 text-[#0f7a64] text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-5 sm:mb-7"
              data-testid="hero-badge"
            >
              <span className="h-2 w-2 rounded-full bg-[#1AB394] animate-pulse" />
              Specialista in Ortopedia · Bordighera
            </div>

            <h1 className="font-display text-[#13485F] text-4xl sm:text-6xl lg:text-7xl leading-[1.05] font-semibold tracking-tight">
              Dr. Nicola Medda
              <span className="block text-xl sm:text-3xl lg:text-4xl mt-3 sm:mt-4 text-[#3a4750] font-normal italic">
                chirurgia mini-invasiva del piede e della caviglia
              </span>
            </h1>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg text-[#4a5a64] max-w-xl leading-relaxed">
              Innovazione, precisione chirurgica e percorsi terapeutici costruiti
              sulla persona. Dalla diagnosi al recupero, ogni paziente è seguito con
              un approccio professionale, accurato e profondamente umano.
            </p>

            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#prenota"
                data-testid={HOME.heroCtaPrenota}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold"
              >
                Prenota una visita <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#patologie"
                data-testid={HOME.heroCtaPatologie}
                className="btn-ghost inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm font-semibold"
              >
                Esplora le patologie trattate
              </a>
            </div>

            <div className="mt-10 sm:mt-12 flex items-center gap-5 sm:gap-8 text-sm flex-wrap">
              <div>
                <p className="font-display text-2xl sm:text-3xl text-[#13485F] font-semibold">
                  30+
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#4a5a64] mt-1">
                  Anni di esperienza
                </p>
              </div>
              <div className="v-line h-10" />
              <div>
                <p className="font-display text-2xl sm:text-3xl text-[#13485F] font-semibold">
                  10.000+
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#4a5a64] mt-1">
                  Interventi eseguiti
                </p>
              </div>
              <div className="v-line h-10" />
              <div>
                <p className="font-display text-2xl sm:text-3xl text-[#13485F] font-semibold">
                  Mini
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#4a5a64] mt-1">
                  Invasiva percutanea
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal in flex justify-center lg:justify-end order-first lg:order-none">
            <div className="relative w-[60%] max-w-[220px] sm:max-w-xs">
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(26,179,148,0.25), transparent)",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden border border-[#13485F]/10 shadow-[0_30px_80px_-30px_rgba(19,72,95,0.45)] aspect-[4/5] bg-[#13485F]/5">
                <img
                  alt="Dr. Nicola Medda"
                  className="absolute top-1/2 left-1/2 max-w-none object-cover"
                  data-testid="hero-portrait"
                  src={HERO_IMG}
                  style={{
                    transform: "translate(-50%, -50%) rotate(90deg)",
                    width: "125%",
                    height: "125%",
                    imageOrientation: "none",
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent p-4">
                  <p className="text-white/90 text-[10px] uppercase tracking-[0.2em]">
                    In sala operatoria
                  </p>
                  <p className="text-white font-display text-base mt-0.5">
                    Ospedale Saint Charles · GVM
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-[#13485F]/10 px-3 py-2.5 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#1AB394]/10 flex items-center justify-center">
                    <Award className="h-4 w-4 text-[#1AB394]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#4a5a64]">
                      Specialista in
                    </p>
                    <p className="text-xs font-semibold text-[#13485F] leading-tight">
                      Ortopedia · Traumatologia
                      <br />
                      Trapianti d'Organo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[#13485F]/10 bg-[#f4f8fa]"
        data-testid="trust-strip"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[#13485F]">
          {trust.map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-medium">
              <CircleCheck className="h-4 w-4 text-[#1AB394]" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
