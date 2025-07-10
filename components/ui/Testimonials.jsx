import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import Link from "next/link";


const Testimonials = () => {
  return <section className="pt-16 xl:pt-32">
    
    <div className="container mx-auto">
      <div className="w-full h-[1px] bg-border mb-6"></div>
      <div className="flex flex-col xl:flex-row relative">
        <div className="flex-1 max-w-[480px] xl:pt-[54px] mb-12 xl:mb-0">
          <Pretitle text={"Testemunhos"} />
          <h2 className="h2 mb-6">Confiança nos Resultados</h2>
          <p>Os nossos clientes partilham como ajudámos a concretizar os seus projetos.</p>


          <div className="mt-6">
            <Link href="#contacts">
            <Button text={"Saiba mais"} />
            </Link></div>
          
        </div>
        <div className="flex-1 flex-col xl:flex-row xl:justify-center">
         <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
          <Image src="/assets/img/testimonials/img.jpg" fill className="object-contain" alt="" quality={100}/>
         </div>
         <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max bg-pink-300">
          <Image src="/assets/img/testimonials/quote.svg" width={54} height={36} alt="" className="absolute z-20 -top-4 left-[60px]"/>
          <Image src="/assets/img/testimonials/quote.svg" width={54} height={36} alt="" className="absolute -bottom-4 right-[160px] z-20"

/>

          <Slider/>
          </div>
        </div>
      </div>
    </div>
  </section>;
  
};

export default Testimonials;
