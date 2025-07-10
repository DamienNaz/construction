"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const statsData = [
  { endCountNum: 98, endCountText: "%", text: "Satisfação dos Clientes" },
  { endCountNum: 55, endCountText: "+", text: "Projetos Concluídos" },
  { endCountNum: 4, endCountText: "", text: "Áreas de Atuação" },
  { endCountNum: 8, endCountText: "+", text: "Anos de Experiência" },
];


const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 }); // ✅ fix spelling

  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
          {statsData.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="text-5xl font-semibold flex items-center justify-center xl:justify-start">
                {inView && (
                  <CountUp
                    start={0}
                    end={item.endCountNum}
                    delay={0.5}
                    duration={2}
                  />
                )}
                <span className="ml-1">{item.endCountText}</span>
              </div>
              <p className="text-white/70 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
