import {Swiper, SwiperSlide} from "swiper/react";

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import HeroSlide from "./HeroSlide";
import {useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

const Hero = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative">
      <div className="flex">
        <Swiper
          onInit={() => setInit(true)}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper w-full"
        >
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <HeroSlide />
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col absolute bottom-20 right-5 z-10 gap-y-2">
          <button
            ref={prevRef}
            className=" size-10 flex justify-center items-center bg-gray-500/60 rounded-xl"
          >
            <ChevronLeft className="size-6 cursor-pointer" />
          </button>
          <button
            ref={nextRef}
            className="size-10 flex justify-center items-center bg-gray-500/60 rounded-xl"
          >
            <ChevronRight className="size-6 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
