import React, { useState, useEffect } from "react";
import { HOME } from "@/constants/testIds";
import { Stethoscope, Calendar, Menu, X } from "lucide-react";

const links = [
  { id: "chi-sono", label: "Chi sono", testid: HOME.navLinkChi },
  { id: "approccio", label: "Approccio", testid: HOME.navLinkMetodo },
  { id: "patologie", label: "Patologie", testid: HOME.navLinkPatologie },
  { id: "prenota", label: "Contatti", testid: HOME.navLinkPrenota },
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="#top" data-testid={HOME.navLogo} className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-[#13485F] flex items-center justify-center shrink-0">
            <Stethoscope className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#1AB394] font-semibold">
              Ospedale Saint Charles · GVM
            </p>
            <p className="font-display text-xl text-[#13485F] font-semibold">
              Dr. Nicola Medda
            </p>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.id}>
              <a
                data-testid={l.testid}
                href={`#${l.id}`}
                className="text-sm font-semibold text-[#13485F] hover:text-[#1AB394] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#prenota"
          data-testid="nav-cta-prenota"
          className="hidden lg:inline-flex btn-primary items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
        >
          <Calendar className="h-4 w-4" /> Prenota visita
        </a>

        <button
          aria-label="menu"
          className="lg:hidden text-[#13485F]"
          onClick={() => setOpen((s) => !s)}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#13485F]/10 px-6 py-5">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-[#13485F]"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#prenota"
                onClick={() => setOpen(false)}
                className="inline-flex btn-primary items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                <Calendar className="h-4 w-4" /> Prenota visita
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
