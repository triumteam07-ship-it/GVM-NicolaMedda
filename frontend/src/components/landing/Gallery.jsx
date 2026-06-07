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
      className="py-16 sm:py-24 lg:py-32 bg-[#0d3548] relative overflow-hidden"
      data-testid="galleria"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 mb-10 sm:mb-12 items-end">
          <div className="lg:col-span-7 reveal in">
            <p className="text-xs uppercase tracking-[0.22em] text-[#1AB394] font-semibold">
              In sala
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mt-3 leading-[1.05] font-semibold">
              La chirurgia mini-invasiva,
              <br />
              nel dettaglio.
            </h2>
          </div>
          <p className="lg:col-span-5 text-white/75 leading-relaxed reveal in">
            Tecniche percutanee che riducono il trauma chirurgico e accelerano il
            ritorno alle normali attività. La precisione si misura in millimetri.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <div
            className="relative overflow-hidden rounded-xl reveal in lg:row-span-2 lg:col-span-2 aspect-[4/5]"
            data-testid="gallery-item-0"
          >
            <img
              alt="Intervento chirurgico 1"
              className="gallery-img w-full h-full object-cover"
              src={images[0]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          {images.slice(1).map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl reveal in aspect-square"
              data-testid={`gallery-item-${i + 1}`}
            >
              <img
                alt={`Intervento chirurgico ${i + 2}`}
                className="gallery-img w-full h-full object-cover"
                src={src}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
