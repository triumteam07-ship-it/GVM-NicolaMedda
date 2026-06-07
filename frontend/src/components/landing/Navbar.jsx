import React, { useState, useEffect } from "react";
import { HOME } from "@/constants/testIds";
import { Menu, X } from "lucide-react";

const links = [
  { id: "chi", label: "Chi è", testid: HOME.navLinkChi },
  { id: "metodo", label: "Metodo", testid: HOME.navLinkMetodo },
  { id: "patologie", label: "Patologie", testid: HOME.navLinkPatologie },
  { id: "struttura", label: "Struttura", testid: HOME.navLinkStruttura },
  { id: "prenota", label: "Prenota", testid: HOME.navLinkPrenota },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#f6f1ea]/95 backdrop-blur-md border-b border-[#1a2942]/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid={HOME.navLogo}
          className="flex flex-col leading-tight"
        >
          <span className="font-serif text-xl md:text-2xl text-[#1a2942] tracking-wide">
            Dr. Nicola Medda
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.18em] text-[#1a2942]/60 font-sans">
            Ortopedia · Bordighera
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.id}>
              <a
                data-testid={l.testid}
                href={`#${l.id}`}
                className="text-sm uppercase tracking-[0.15em] font-medium text-[#1a2942]/80 hover:text-[#c98a3f] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#prenota"
          data-testid="nav-cta-prenota"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-[#1a2942] text-[#f6f1ea] text-sm tracking-wide hover:bg-[#c98a3f] transition-colors duration-300"
        >
          Prenota una visita
        </a>

        <button
          aria-label="menu"
          className="lg:hidden text-[#1a2942]"
          onClick={() => setOpen((s) => !s)}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#f6f1ea] border-t border-[#1a2942]/10 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.15em] text-[#1a2942]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#prenota"
                onClick={() => setOpen(false)}
                className="inline-flex px-5 py-2.5 rounded-full bg-[#1a2942] text-[#f6f1ea] text-sm"
              >
                Prenota una visita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
