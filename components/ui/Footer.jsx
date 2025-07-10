"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
} from "react-icons/ri";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-16 bg-primary text-white py-6">
      <div className="container mx-auto">
        {/* Top content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* Logótipo com margem inferior extra */}
          <div className="flex items-center justify-center">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo1.png"
                alt="FrioQuente"
                width={100}
                height={100}
                className="object-contain mb-2" // ← dá espaço abaixo do logo
              />
            </Link>
          </div>

          {/* Contactos */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted text-center md:text-left">
            <div className="flex items-center gap-2">
              <RiMapPin2Fill className="text-accent text-lg" />
              Zona Industrial Pau Queimado, Montijo
            </div>
            <div className="flex items-center gap-2">
              <RiPhoneFill className="text-accent text-lg" />
              +351 912 345 678
            </div>
            <div className="flex items-center gap-2">
              <RiMailFill className="text-accent text-lg" />
              info@misse.pt
            </div>
          </div>

          {/* Navegação */}
          <ul className="flex gap-6 text-sm text-muted text-center md:text-left">
            <li><Link href="/#about">Sobre Nós</Link></li>
            <li><Link href="/#services">Serviços</Link></li>
            <li><Link href="/#projects">Projetos</Link></li>
            <li><Link href="/#contacts">Contactos</Link></li>
          </ul>
        </div>

        {/* Linha + Copyright */}
        <div className="h-[1px] bg-accent my-4" /> {/* ← espaçamento acima e abaixo da linha */}
        <div className="text-center text-xs text-muted">
          © {year} FrioQuente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
