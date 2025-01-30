import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { FreeMode, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import Image from "next/image";

interface IProps {
  images: {
    url: string;
    alt: string;
  }[];
}
const Slider = ({ images }: IProps) => {
  return (
    <div className="fixed w-[300px] md:w-[700px] z-[1000]">
      <Swiper
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="absolute left-0">
        {images.map((img) => (
          <SwiperSlide key={img.alt}>
            <Image src={img.url} alt={img.alt} width={500} height={1000} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
