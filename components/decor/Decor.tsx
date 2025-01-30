"use client";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Navigation } from "swiper/modules";
import { FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "./styles.css";
import Image from "next/image";

interface IProps {
  images: {
    url: string;
    alt: string;
  }[];
  setLoading: (val: boolean) => void;
}

const Decor = ({ images, setLoading }: IProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  return (
    <motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}>
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`h-[380px] `}>
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <Image
                onClick={() => {
                  if (setLoading) {
                    setLoading(true);
                  }
                }}
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`mySwiper`}>
          {images.map((image) => (
            <SwiperSlide key={image.alt}>
              <Image src={image.url} alt={image.alt} width={100} height={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Decor;
