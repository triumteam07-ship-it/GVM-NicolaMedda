import React from "react";

const images = [
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/hzes9f91_3.jpeg",
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/cxvudu8n_4.jpeg",
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/mr7cdxzp_7.jpeg",
  "https://customer-assets.emergentagent.com/job_dr-medda-ortopedia/artifacts/7a0ku6ft_1.jpeg",
];

const Gallery = () => {
  return (
    <section
      id="sala"
      className="py-24 lg:py-32 bg-[#ece5da] border-t border-[#1a2942]/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#c98a3f] mb-6">
              In sala
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#1a2942]">
              La chirurgia mini-invasiva, <br />
              <span className="italic font-light">nel dettaglio.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg leading-relaxed text-[#1a2942]/75 font-light">
              Tecniche percutanee che riducono il trauma chirurgico e accelerano il
              ritorno alle normali attività. La precisione si misura in millimetri.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] lg:translate-y-10"
              }`}
            >
              <img
                src={src}
                alt={`Intervento chirurgico ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-[#1a2942]/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
