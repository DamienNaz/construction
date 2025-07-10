import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/avac.png",
    name: "AVAC",
    description: "Soluções eficientes",
    href: "#",
  },
  {
    img: "/assets/img/work/canalizacao.png",
    name: "Canalização",
    description: "Instalações e reparações",
    href: "#",
  },
  {
    img: "/assets/img/work/obras.png",
    name: "Pequenas Obras",
    description: "Remodelações",
    href: "#",
  },
  {
    img: "/assets/img/work/solar.png",
    name: "Painéis Solares",
    description: "Energia limpa",
    href: "#",
  },
];

const Work = () => {
  return (
    <section className="pt-16 xl:pt-32" id="projects">
      <div className="container">
        {/* Heading */}
        <div className="text-left mb-12">
          <div className="w-full h-[1px] bg-border mb-6"></div>
          <Pretitle text={"Projetos"} />
          <h2 className="h2 mb-3">Conheça o Nosso Trabalho</h2>
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
                <div className="w-[95%] h-[100px] bg-[#3a3a3a] absolute bottom-4 flex justify-between items-center text-white md:translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 rounded-md px-6">
                  <div className="pr-16">
                    <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm">
                      <RiCheckboxCircleFill className="text-accent text-xl" />
                      <p>{item.description}</p>
                    </div>
                  </div>

                  {item.href && (
                    <Link
                      href={item.href}
                      className="absolute bottom-4 right-4 w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center rounded-full z-20"
                    >
                      <RiArrowRightUpLine />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
