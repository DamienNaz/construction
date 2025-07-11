"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  { name: "Início", path: "home" },
  { name: "Sobre Nós", path: "about" },
  { name: "Serviços", path: "services" },
  { name: "Projetos", path: "projects" },
  { name: "Contactos", path: "contacts" },
];

const Header = () => {
  const [active, setActive] = useState("home");
  const [showUnderline, setShowUnderline] = useState(true);

  const handleSetActive = (path) => {
    setActive(path);
    setShowUnderline(true);

    // Oculta o sublinhado após 3 segundos
    setTimeout(() => {
      setShowUnderline(false);
    }, 1000);
  };

  return (
    <header className="bg-primary py-4 shadow-sm z-50 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Logo />
        </div>

        {/* Navegação desktop */}
        <nav className="hidden xl:flex items-center gap-12">
          <ul className="flex relative gap-6">
            {links.map((link, index) => (
              <li key={index} className="relative px-1">
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  spy={true}
                  offset={-140}
                  duration={500}
                  isDynamic={true}
                  onSetActive={() => handleSetActive(link.path)}
                  className={`cursor-pointer text-sm uppercase font-primary font-medium tracking-[1.2px] transition-colors ${
                    active === link.path ? "text-accent" : "text-white"
                  }`}
                >
                  {link.name}
                </ScrollLink>

                {/* Underline animado */}
                {active === link.path && showUnderline && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-[2px] bg-accent bottom-[-6px] rounded"
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Botão de orçamento */}
          <ScrollLink to="contacts" smooth={true} offset={-70} duration={500}>
            <button
              type="button"
              className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] bg-white group"
            >
              <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                Pedir Orçamento
              </div>
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </ScrollLink>
        </nav>

        {/* Navegação mobile */}
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
