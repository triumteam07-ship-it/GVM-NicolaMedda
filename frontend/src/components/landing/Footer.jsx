import React from "react";
import { Stethoscope } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a2738] text-white/70 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#13485F] flex items-center justify-center">
            <Stethoscope className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
              Ospedale Saint Charles · GVM
            </p>
            <p className="font-display text-lg text-white">Dr. Nicola Medda</p>
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] flex flex-wrap gap-x-6 gap-y-2">
          <span>Ortopedia</span>
          <span>·</span>
          <span>Traumatologia</span>
          <span>·</span>
          <span>Trapianti d'Organo</span>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </p>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-3"
        data-testid="footer-powered-by"
      >
        <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
          Powered by
        </p>
        <a
          href="https://triumteam-studio.preview.emergentagent.com/?utm_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-opacity duration-300 hover:opacity-80"
          data-testid="footer-triumteam-logo-link"
          aria-label="Triumteam Studio - apre in una nuova scheda"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_ortopedia-bordighera/artifacts/6e92vy8s_WhatsApp_Image_2026-06-07_at_14.15.41-removebg-preview.png"
            alt="Triumteam - Agenzia Digitale Innovativa"
            className="h-[72px] w-auto object-contain"
            data-testid="footer-triumteam-logo"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
