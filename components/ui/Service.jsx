"use client";

import Pretitle from "./Pretitle";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
  PiThermometerHotFill,
  PiDropFill,
  PiHammerFill,
  PiSunFill,
} from "react-icons/pi";

const serviceData = [
  {
    name: "AVAC",
    icon: <PiThermometerHotFill />,
    title: "Sistemas de AVAC",
    description:
      "Instalamos e mantemos sistemas de climatização eficientes, garantindo conforto térmico com soluções energeticamente sustentáveis.",
    serviceList: [
      "Instalação de Ar Condicionado",
      "Sistemas de Ventilação",
      "Manutenção Preventiva",
      "Aquecimento Central",
      "Renovação de AVAC antigo",
      "Soluções para habitação e comércio",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-avac1.png" },
      { url: "/assets/img/services/thumb-avac2.png" },
    ],
  },
  {
    name: "Canalização",
    icon: <PiDropFill />,
    title: "Serviços de Canalização",
    description:
      "Resolvemos problemas de canalização e executamos novas instalações com materiais de qualidade e mão de obra especializada.",
    serviceList: [
      "Instalação de Redes de Água",
      "Substituição de Canalizações",
      "Reparação de Fugas",
      "Canalização de Cozinhas e Casas de Banho",
      "Sistemas de Esgotos",
      "Instalações para novos edifícios",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-plumbing1.png" },
      { url: "/assets/img/services/thumb-plumbing2.png" },
    ],
  },
  {
    name: "Pequenas Obras",
    icon: <PiHammerFill />,
    title: "Pequenas Obras",
    description:
      "Realizamos remodelações, reparações e acabamentos com atenção ao detalhe e respeito pelo seu espaço.",
    serviceList: [
      "Remodelação de Interiores",
      "Pequenos Trabalhos de Construção",
      "Colocação de Pavimentos",
      "Pintura e Revestimentos",
      "Divisórias em Pladur",
      "Melhorias Estéticas em Habitações",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-works1.png" },
      { url: "/assets/img/services/thumb-works2.png" },
    ],
  },
  {
    name: "Painéis Solares",
    icon: <PiSunFill />,
    title: "Energia Solar",
    description:
      "Soluções solares para reduzir os custos energéticos e tornar o seu projeto mais sustentável e autónomo.",
    serviceList: [
      "Instalação de Painéis Fotovoltaicos",
      "Sistemas de Autoconsumo",
      "Manutenção de Sistemas Solares",
      "Consultoria Energética",
      "Armazenamento de Energia",
      "Integração com AVAC e Domótica",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-solar1.png" },
      { url: "/assets/img/services/thumb-solar2.png" },
    ],
  },
];

const Service = () => {
  const [activeTab, setActiveTab] = useState("AVAC");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        {/* Section Title */}
        <div>
          <Pretitle text="Serviços" />
          <h2 className="h2 mb-3">As Nossas Soluções</h2>
          <p className="mb-11 max-w-[480px] text-left">
            Especialistas em AVAC, canalização, obras e solar, com soluções eficientes e inovadoras para cada projeto.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="AVAC" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mb-12 relative z-10">
            {serviceData.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                onClick={() => setActiveTab(item.name)}
                className="w-full h-[120px] flex items-center justify-center p-0 outline-none"
              >
                <div
                  className={`flex flex-col items-center justify-center w-full h-full gap-2 ${
                    activeTab === item.name
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                  }`}
                >
                  <div className="text-5xl">{item.icon}</div>
                  <div className="capitalize text-base font-semibold">{item.name}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tabs Content */}
          {serviceData.map((item) => (
            <TabsContent key={item.name} value={item.name}>
              <div className="pt-6 mt-10 flex flex-col xl:flex-row gap-12 items-start z-0 relative">
                <div className="h-px bg-gray-200 my-6 block md:hidden"></div>

                {/* Left: Text content */}
                <div className="flex-1">
                  <h3 className="h3 mb-8">{item.title}</h3>
                  <p className="mb-8">{item.description}</p>
                  <ul className="mb-8 grid grid-cols-2 gap-2 text-sm text-primary">
                    {item.serviceList.map((service, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Button text="Fale Connosco" />
                </div>

                {/* Right: Images */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                  {item.thumbs.map((thumb, i) => (
                    <Image
                      key={i}
                      src={thumb.url}
                      alt={`thumb-${i}`}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Service;
