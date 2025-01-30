"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Link } from "react-scroll";
import { hero01, hero02, hero03 } from "@/public/Header";

export function Hero() {
  const images = [hero01.src, hero02.src, hero03.src];
  return (
    <section id="hero">
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            بناء المستقبل بجودة عالية!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-md md:text-lg max-w-96 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            تواصل معنا اليوم للحصول على أفضل خدمات الإنشاءات، التشطيبات، الترميم، والصيانة للمباني
            السكنية، التجارية، والترفيهية. نقدم تشطيبات داخلية وخارجية، ديكورات عصرية، سباكة،
            كهرباء، دهانات، أرضيات، وجبس بأعلى معايير الجودة، مع ضمانات وتسليم في الوقت المحدد.
          </motion.p>

          <div className="flex items-center gap-2 mt-4">
            <button
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative"
              aria-label="تواصل معنا">
              <Link to="contact">تواصل معنا</Link>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>

            <span className="text-white">أو</span>

            <button>
              <a
                href="https://api.whatsapp.com/send?phone=9660569088789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-emerald-600 hover:bg-emerald-700 transition-all text-white rounded-full"
                aria-label="اتصل بنا عبر واتساب">
                اتصل بنا الآن
              </a>
            </button>
          </div>
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
