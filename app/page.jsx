"use client";
import { useEffect, useState } from "react";

import Topbar from "@/components/ui/Topbar";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Stats from "@/components/ui/Stats";
import Service from "@/components/ui/Service";
import Work from "@/components/ui/Work";
import Testimonials from "@/components/ui/Testimonials";
import Faq from "@/components/ui/Faq";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import PartnersSwipper from "@/components/ui/PartnersSwiper";
import ChatDiagnostic  from "@/components/ui/simulador";


const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Topbar />
      <div className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${headerActive ? "translate-y-0" : "-translate-y-full"}`}>
        <Header />
      </div>
      <Hero />
      <About />
      <Stats />
      <Service />
      <PartnersSwipper/>
      <ChatDiagnostic />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
