'use client';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

const Sliderbtns = ({ swiperRef }) => {
  return (
    <div className="absolute bottom-2 right-2 flex gap-1 z-10">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="bg-accent text-primary text-[22px] w-[48px] h-[48px] flex justify-center items-center transition-all cursor-pointer"
      >
        <RiArrowLeftLine />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="bg-accent text-primary text-[22px] w-[48px] h-[48px] flex justify-center items-center transition-all cursor-pointer"
      >
        <RiArrowRightLine />
      </button>
    </div>
  );
};

export default Sliderbtns;
