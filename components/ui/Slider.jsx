'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useRef } from 'react';
import Sliderbtns from './Sliderbtns';

const Slider = () => {
  const swiperRef = useRef();

  return (
    <div className="relative w-full max-w-[630px] h-[200px] bg-white shadow-custom">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        <SwiperSlide>
          <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
            <div className="relative hidden xl:flex w-[90px] h-[90px]">
              <Image
                src="/assets/img/testimonials/avatar1.PNG"
                fill
                className="object-contain"
                quality={100}
                alt="avatar1"
              />
            </div>
            <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
              <p>Trabalho rápido e limpo! Recomendo.</p>
              <p className="font-primary font-semibold text-primary">
                Damien Silva
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
            <div className="relative hidden xl:flex w-[90px] h-[90px]">
              <Image
                src="/assets/img/testimonials/avatar.PNG"
                fill
                className="object-contain"
                quality={100}
                alt="avatar2"
              />
            </div>
            <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>Superou as expectativas, dentro do orçamento e com excelente qualidade.</p>
              <p className="font-primary font-semibold text-primary">
                Rafaela Gonçalves
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
            <div className="relative hidden xl:flex w-[90px] h-[90px]">
              <Image
                src="/assets/img/testimonials/avatar3.PNG"
                fill
                className="object-contain"
                quality={100}
                alt="avatar3"
              />
            </div>
            <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
              <p>Trabalho de excelente qualidade. Recomendo vivamente a equipa.</p>
              <p className="font-primary font-semibold text-primary">
                Rita Blanco
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom buttons */}
      <Sliderbtns swiperRef={swiperRef} />
    </div>
  );
};

export default Slider;
