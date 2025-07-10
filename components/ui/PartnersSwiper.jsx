"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { logo: "/assets/img/logos/casais.png", alt: "Casais" },
  { logo: "/assets/img/logos/mota.png", alt: "Mota Engil" },
  { logo: "/assets/img/logos/teixeira_Duarte.png", alt: "Teixeira Duarte" },
  { logo: "/assets/img/logos/sanitop.png", alt: "Casais repeat" }, // repetição para loop
  { logo: "/assets/img/logos/Kilomat.png", alt: "Mota repeat" },
  { logo: "/assets/img/logos/xmat.png", alt: "xmat" },
  { logo: "/assets/img/logos/samsung-logo.png", alt: "xmat1" },
  { logo: "/assets/img/logos/midea-logo.png", alt: "xmat2" },
  { logo: "/assets/img/logos/daikin.png", alt: "xmat3" },
  { logo: "/assets/img/logos/fujitsu-logo.png", alt: "xmat4" },
  { logo: "/assets/img/logos/mitsubishi-electric-logo.png", alt: "xmat5" },
];

const PartnersTicker = () => {
  return (
    <>
      {/* Margem branca acima */}
      <div className="w-full h-12 bg-white" />
      <div className="w-full h-[6px] bg-accent" />

      <section className="w-full bg-white py-10 overflow-hidden">
        <div className="container mx-auto">
          <h3 className="text-center text-xl font-semibold text-primary mb-6 uppercase tracking-widest">
            Empresas com quem colaboramos
          </h3>

          {/* Ticker */}
          <motion.div
            className="flex w-max gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex items-center justify-center min-w-[120px]">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="w-full h-[6px] bg-accent" />
    </>
  );
};

export default PartnersTicker;
