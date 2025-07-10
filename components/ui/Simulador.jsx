"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

const questions = [
  {
    id: 1,
    question: "O ar condicionado deixou de funcionar?",
    options: ["Sim", "Não"],
    next: { Sim: 2, Não: 3 },
  },
  {
    id: 2,
    question: "O equipamento liga mas não aquece/arrefece?",
    options: ["Sim", "Não"],
    next: { Sim: "falha_termica", Não: "manutencao" },
  },
  {
    id: 3,
    question: "Nota fugas no teto?",
    options: ["Sim", "Não"],
    next: { Sim: "fuga_canalizacao", Não: 4 },
  },
  {
    id: 4,
    question: "A água não aquece?",
    options: ["Sim", "Não"],
    next: { Sim: "problema_termico", Não: "visita_tecnica" },
  },
];

const results = {
  falha_termica: {
    cause: "Possível falha térmica ou gás refrigerante em baixo.",
    solution: "Recomendamos uma verificação técnica do equipamento.",
  },
  manutencao: {
    cause: "O equipamento pode necessitar de manutenção preventiva.",
    solution: "Agende uma manutenção com um técnico qualificado.",
  },
  fuga_canalizacao: {
    cause: "Poderá haver uma fuga na canalização.",
    solution: "Necessária inspeção da rede hidráulica.",
  },
  problema_termico: {
    cause: "Falha no sistema de aquecimento de água.",
    solution: "Verifique a caldeira ou o termoacumulador.",
  },
  visita_tecnica: {
    cause: "Diagnóstico mais detalhado necessário.",
    solution: "Agende uma visita técnica com um dos nossos especialistas.",
  },
};

export default function ChatDiagnostic() {
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  const current = questions.find((q) => q.id === step);
  const isDone = typeof step === "string";

  const handleOption = (option) => {
    setHistory((prev) => [...prev, { question: current.question, answer: option }]);
    setStep(current.next[option]);
  };

  return (
    <div className="relative bg-white border border-gray-200 shadow-lg rounded-xl p-6 max-w-md mx-auto mt-12">
      <h2 className="text-xl font-semibold mb-4 text-primary">Diagnóstico Rápido</h2>

      <div className="space-y-4">
        {/* Histórico */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <motion.div
              className="bg-black text-white px-4 py-2 rounded-md w-fit"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.question}
            </motion.div>
            <motion.div
              className="bg-yellow-400 text-black px-4 py-2 rounded-md w-fit ml-auto"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {item.answer}
            </motion.div>
          </div>
        ))}

        {/* Nova pergunta */}
        {!isDone && current && (
          <motion.div
            key={current.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4"
          >
            <div className="bg-black text-white px-4 py-2 rounded-md w-fit mb-3">
              {current.question}
            </div>
            <div className="flex flex-wrap gap-2">
              {current.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleOption(opt)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resultado final */}
        {isDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 space-y-2"
          >
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-md">
              <strong>Causa provável:</strong> {results[step].cause}
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-md">
              <strong>Solução:</strong> {results[step].solution}
            </div>

            <a
              href="#contacts"
              className="block text-center bg-black text-white py-2 rounded-md mt-4 font-medium hover:bg-neutral-800 transition"
            >
              Falar com um Técnico
            </a>
          </motion.div>
        )}
      </div>

      {/* Botão WhatsApp */}
      <a
        href="https://wa.me/351912345678?text=Olá%2C+preciso+de+ajuda+com+um+problema+técnico."
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        title="Falar no WhatsApp"
      >
        <RiWhatsappFill className="text-2xl" />
      </a>
    </div>
  );
}
