import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 bg-[#0f1a2e] text-[#f6f1ea]/70 border-t border-[#f6f1ea]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div>
          <div className="font-serif text-xl text-[#f6f1ea]">Dr. Nicola Medda</div>
          <div className="text-xs uppercase tracking-[0.22em] mt-2">
            Specialista in Ortopedia · Bordighera
          </div>
        </div>
        <div className="text-xs uppercase tracking-[0.18em] flex flex-wrap gap-x-6 gap-y-2">
          <span>Ortopedia</span>
          <span>·</span>
          <span>Traumatologia</span>
          <span>·</span>
          <span>Trapianti d'Organo</span>
        </div>
        <div className="text-xs text-[#f6f1ea]/40">
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </div>
      </div>
    </footer>
  );
};

export default Footer;
