"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";

export function Hero() {
  const images = [
    "https://saadihg.com/wp-content/uploads/2024/08/5-1-2.jpg",
    "https://saadihg.com/wp-content/uploads/2024/02/3.jpg",
    "https://mar-decor.com/images/-%D9%85%D9%86%D8%A7%D8%B2%D9%84-%D8%AC%D8%AF%DB%8C%D8%AF_1615222582.jpg",
    "https://aqarat.see.news/wp-content/uploads/2021/04/%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA.jpg",
    "https://khdmatkuwait.com/wp-content/uploads/2024/02/skyscrapers-construction-site-modern-buildings-new-york-scaled.jpg",
  ];
  return (
    <section id="hero">
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center">
          <motion.h1 className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            بناء المستقبل بجودة عالية <br /> تواصل معانا
          </motion.h1>
          <motion.p className="text-md md:text-lg max-w-96 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            نحن متخصصون في إنشاءات وتشطيب وترميم وصيانة المباني السكنية والتجارية والترفيهية. نقدم
            خدمات تشطيبات داخلية وخارجية، ديكورات، سباكة، كهرباء، دهانات، أرضيات، وجبس بجودة عالمية
            وضمانات مع تسليم في الوقت المحدد.
          </motion.p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <Link href={"#contact"}> تواصل معانا </Link>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
