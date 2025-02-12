"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import HeroSlide, {SpotlightAnimeData} from "./HeroSlide";
import {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

const preLoadData = {
  rank: 1,
  id: "one-piece-100",
  name: "One Piece",
  description:
    'Gold Roger was known as the "Pirate King," the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.\n\nEnter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy\'s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.',
  poster:
    "https://cdn.noitatnemucod.net/thumbnail/1366x768/100/db8603d2f4fa78e1c42f6cf829030a18.jpg",
  jname: "One Piece",
  episodes: {
    sub: 1122,
    dub: 1108,
  },
  type: "TV",
  otherInfo: ["TV", "24m", "Oct 20, 1999", "HD"],
};

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_ANIMEHIVE_API}/api/v2/hianime/home`)
      .then((data) => data.json())
      .then((data) => setData(data.data.spotlightAnimes));
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (data.length < 1)
    return (
      <div className="w-full">
        <HeroSlide data={preLoadData} />
      </div>
    );
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
          {data.map((data: SpotlightAnimeData) => (
            <SwiperSlide key={data.id} className="w-full">
              <HeroSlide data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col absolute bottom-20 right-5 z-10 gap-y-2 max-md:hidden">
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
