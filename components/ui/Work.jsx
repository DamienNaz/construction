"use client";

import Image from "next/image";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workData = [
  {
    img: "/assets/img/work/avac.png",
    name: "AVAC",
    description: "Soluções eficientes",
    category: "hvac",
  },
  {
    img: "/assets/img/work/canalizacao.png",
    name: "Canalização",
    description: "Instalações e reparações",
    category: "plumbing",
  },
  {
    img: "/assets/img/work/obras.png",
    name: "Pequenas Obras",
    description: "Remodelações",
    category: "renovations",
  },
  {
    img: "/assets/img/work/solar.png",
    name: "Painéis Solares",
    description: "Energia limpa",
    category: "solar",
  },
];

const projectGallery = {
  hvac: {
    title: "AVAC",
    images: [
      {
        src: "/assets/img/cardproject/avac1.png",
        caption: "Instalação de AVAC em moradia – Setúbal",
      },
      {
        src: "/assets/img/cardproject/avac2.png",
        caption: "Reparação de sistema de climatização – Loja no Barreiro",
      },
      {
        src: "/assets/img/cardproject/avac3.png",
        caption: "Instalação de AVAC industrial – Escritórios nas Amoreiras",
      },
      {
        src: "/assets/img/cardproject/avac4.png",
        caption: "Substituição de sistema antigo por unidade mural moderna – Quarto em Setúbal",
      },
    ],
  },
  plumbing: {
    title: "Canalização",
    images: [
      {
        src: "/assets/img/cardproject/canalizacao1.png",
        caption: "Canalização industrial – Parque de estacionamento em Almada",
      },
      {
        src: "/assets/img/cardproject/canalizacao2.png",
        caption: "Reparação de fugas – Casa de praia na Comporta",
      },
      {
        src: "/assets/img/cardproject/canalizacao3.png",
        caption: "Rede de águas quentes e frias – Centro Comercial em Lisboa",
      },
      {
        src: "/assets/img/cardproject/canalizacao4.png",
        caption: "Renovação de canalização com sistema oculto – Casa de banho em Almada",
      },
    ],
  },
  renovations: {
    title: "Pequenas Obras",
    images: [
      {
        src: "/assets/img/cardproject/obras1.png",
        caption: "Aplicação de pavimento flutuante – Apartamento em Lisboa",
      },
      {
        src: "/assets/img/cardproject/obras2.png",
        caption: "Remodelação de sala – Casa de Troia",
      },
      {
        src: "/assets/img/cardproject/obras3.png",
        caption: "Construção de parede em pladur com isolamento acústico – Apartamento em Lisboa",
      },
      {
        src: "/assets/img/cardproject/obras4.png",
        caption: "Aplicação de pavimento flutuante vinílico – Cozinha em apartamento T2 no Barreiro",
      },
    ],
  },
  solar: {
    title: "Painéis Solares",
    images: [
      {
        src: "/assets/img/cardproject/solar1.png",
        caption: "Instalação de painéis solares – Vivenda em Sesimbra",
      },
      {
        src: "/assets/img/cardproject/solar2.png",
        caption: "Sistema solar para autoconsumo – Moradia em Alcochete",
      },
      {
        src: "/assets/img/cardproject/solar3.png",
        caption: "Instalação de painéis solares com estrutura inclinada – Cobertura técnica de edifício urbano",
      },
      {
        src: "/assets/img/cardproject/solar4.png",
        caption: "Instalação de sistema solar em cobertura leve – Garagem de madeira em zona rural de Pegões",
      },
    ],
  },
};

const Work = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="pt-16 xl:pt-32" id="projects">
      <div className="container">
        {/* Heading */}
        <div className="text-left mb-12">
          <div className="w-full h-[1px] bg-border mb-6"></div>
          <Pretitle text="Projetos" />
          <h2 className="h2 mb-3">Projetos Realizados</h2>
          <p className="max-w-[480px] text-left">
            Soluções técnicas adaptadas a cada necessidade. Descubra alguns dos projetos que já concretizámos.
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-x-auto scroll-smooth scrollbar-hide">
          <div className="flex gap-6 scroll-snap-x mandatory px-4 md:px-0">
            {workData.map((item, index) => (
              <div
                key={index}
                className="min-w-[85%] md:min-w-[45%] xl:min-w-[22%] h-[492px] relative rounded-md overflow-hidden scroll-snap-align-start group"
              >
                {/* Background image */}
                <Image
                  src={item.img}
                  fill
                  alt={item.name}
                  quality={100}
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />

                {/* Overlay box */}
                <div
                  className="w-[95%] h-[100px] bg-[#3a3a3a] absolute bottom-4 flex justify-between items-center text-white md:translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 rounded-md px-6 cursor-pointer"
                  onClick={() => setActiveCategory(item.category)}
                >
                  <div className="pr-16">
                    <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <RiCheckboxCircleFill className="text-accent text-xl" />
                      <p>{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center rounded-full z-20">
                    <RiArrowRightUpLine />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setActiveCategory(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="relative bg-white p-6 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="absolute top-4 right-4 text-lg text-muted-foreground hover:text-primary"
              >
                &times;
              </button>

              <h3 className="text-xl font-bold mb-2">
                {projectGallery[activeCategory]?.title}
              </h3>
              <div className="mb-4 text-sm text-muted-foreground">
                {/* Opcional: Adiciona descrição geral da categoria aqui se quiseres */}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectGallery[activeCategory]?.images.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2"
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                    <p className="text-sm text-muted-foreground">{item.caption}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
