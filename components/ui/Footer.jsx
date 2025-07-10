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
    <footer className="mt-16 xl:mt-32 bg-primary text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/logo1.PNG"
                width={120}
                height={40}
                alt="UrbanBuild"
                className="object-contain"
              />
            </Link>
          </div>

          {/* Contactos */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base">Contactos</h4>
            <div className="flex items-start gap-3 text-sm text-muted">
              <RiMapPin2Fill className="text-xl text-accent" />
              Zona Industrial Pau Queimado, Montijo
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <RiPhoneFill className="text-xl text-accent" />
              +351 912 345 678
            </div>
            <div className="flex items-center gap-3 text-sm text-muted">
              <RiMailFill className="text-xl text-accent" />
              info@misse.pt
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-base">Navegação</h4>
            <ul className="text-sm text-muted flex flex-col gap-2">
              <li><Link href="/#about">Sobre Nós</Link></li>
              <li><Link href="/#services">Serviços</Link></li>
              <li><Link href="/#projects">Projetos</Link></li>
              <li><Link href="/#contacts">Contactos</Link></li>
            </ul>
          </div>
        </div>

        {/* Linha de separação + copyright */}
        <div className="h-[1px] bg-accent mt-10" />
        <div className="text-center text-xs text-muted pt-4">
          © {year} FrioQuente. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
