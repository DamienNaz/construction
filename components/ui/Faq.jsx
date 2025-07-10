import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/public/assets/variants";
import FaqItem from "./FaqItem";

const faqItemsData = [
  {
    title: "Quanto tempo demora uma instalação de AVAC?",
    description:
      "Depende da dimensão do espaço e do tipo de sistema. Instalações simples podem demorar 1 a 2 dias, enquanto sistemas completos para edifícios maiores podem levar uma semana ou mais.",
  },
  {
    title: "Preciso de licenças para as obras ou instalações?",
    description:
      "Algumas intervenções requerem licenciamento, especialmente em zonas urbanas ou edifícios com regulamentos específicos. Podemos ajudar em todo o processo, se necessário.",
  },
  {
    title: "Como funcionam os orçamentos?",
    description:
      "Começamos com uma visita ou contacto inicial para avaliar as necessidades. Depois apresentamos um orçamento detalhado, ajustado ao seu projeto e preferências.",
  },
  {
    title: "Também fazem remodelações pequenas?",
    description:
      "Sim. Fazemos desde pequenas intervenções como pintura, pladur ou substituição de pavimentos, até remodelações completas de cozinhas ou casas de banho.",
  },
  {
    title: "Oferecem garantia sobre os serviços prestados?",
    description:
      "Sim, todos os nossos serviços incluem garantia de execução. A duração pode variar consoante o tipo de instalação ou obra realizada.",
  },
];

const faqItemsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: () => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container">
        <div>
          <Pretitle text={"FAQ"} center />
          <h2 className="h2 mb-3">Dúvidas Frequentes</h2>
          <p className="mb-11 max-w-[480px]">
            Respondemos às perguntas mais comuns sobre AVAC, canalização, obras e energia solar.
          </p>
        </div>
        <ul>
          {faqItemsData.map((item, index) => (
            <li key={index}>
              <FaqItem title={item.title} description={item.description} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
