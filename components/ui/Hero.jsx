import Button from "./Button";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10" />
      
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <h1 className="h1 text-white mb-4">
            <span className="text-accent">Construir</span> Soluções robustas e duradouras
          </h1>
          <p className="mb-9">
            Desde o conceito até à conclusão, garantimos que cada detalhe seja optimizado para a robustez e durabilidade, criando soluções que inspiram confiança e permanecem firmes ao longo dos anos.
          </p>
          <div>
            <ScrollLink
            to="projects"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Button text="Ver projetos" />
          </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
