"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { IconSquareRoundedX } from "@tabler/icons-react";
import Decor from "@/components/decor/Decor";
import Slider from "@/components/Slider";
import { DecorData } from "@/data";
import ContactButton from "@/components/ContactButton";

export default function DecorPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
            <div className="bg-gradient-to-t inset-x-0 z-20 bottom-0 bg-white dark:bg-black h-full absolute [mask-image:radial-gradient(900px_at_center,transparent_30%,white)]" />
            <div className="h-screen w-screen flex items-center justify-center ">
              <Slider images={DecorData} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container my-8 grid grid-cols-1 md:grid-cols-2">
        <div dir="rtl" className="text-right p-6 rounded-2xl">
          {/* عنوان متحرك */}
          <motion.h1
            className="text-lg font-bold md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            ديكورات داخلية وخارجية – نبتكر لنحقق رؤيتك
          </motion.h1>

          {/* فقرة تعريفية */}
          <motion.p
            className="max-w-lg mt-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            نحن متخصصون في تصميم وتنفيذ الديكورات الداخلية والخارجية بأسلوب يعكس هويتك ويلبي رغباتك.
            من الفكرة إلى التنفيذ، نحرص على تقديم تصاميم فريدة تجمع بين الجمال، الوظيفة، والإبداع،
            لنحول مساحتك إلى تجربة فريدة تعكس شخصيتك وأسلوب حياتك.
          </motion.p>

          {/* زر CTA مع تأثير */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}>
            <ContactButton />
          </motion.div>
        </div>
        <div>
          <Decor images={DecorData} setLoading={setLoading} />
        </div>
      </div>
      {loading && (
        <button
          className="fixed top-4 z-[1001] right-4 text-black dark:text-white"
          onClick={() => {
            setLoading(false);
          }}>
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
