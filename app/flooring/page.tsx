"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconSquareRoundedX } from "@tabler/icons-react";
import Decor from "@/components/decor/Decor";
import Slider from "@/components/Slider";
import { FloorData } from "@/data";
import ContactButton from "@/components/ContactButton";
const Flooring = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
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
              <Slider images={FloorData} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container my-8 grid grid-cols-1 md:grid-cols-2">
        <div dir="rtl" className="text-right p-6 rounded-2xl">
          <motion.h1
            className="text-lg font-bold md:text-2xl lg:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            أعمال الأرضيات في جدة ومكة
          </motion.h1>

          <motion.p
            className="max-w-lg mt-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            نقدم خدمات تركيب الأرضيات بجودة عالية في جدة ومكة باستخدام أحدث الخامات والتقنيات لضمان
            ديمومة وجمال الأرضيات. لدينا فريق متخصص في تركيب جميع أنواع الأرضيات باحترافية عالية،
            بما يتناسب مع احتياجاتك وتفضيلاتك الشخصية.
          </motion.p>

          <motion.ul
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}>
            <motion.h4
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="font-bold text-lg md:text-2xl mt-4">
              🏠 خدماتنا تشمل:
            </motion.h4>
            <motion.li
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.2,
                delay: 0.6,
              }}
              className="text-gray-400">
              ✔️ تركيب أرضيات خشبية (باركيه) بأحدث التصميمات والأنماط
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
                delay: 0.7,
              }}
              className="text-gray-400">
              ✔️ أرضيات سيراميك وبورسلين بتصاميم عصرية تناسب جميع المساحات
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.8,
              }}
              className="text-gray-400">
              ✔️ أرضيات رخامية وجرانيتية لمظهر فاخر ودائم
            </motion.li>

            <motion.li
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="text-gray-400">
              ✔️ أرضيات PVC لمقاومة الماء وسهولة الصيانة
            </motion.li>
            <motion.li
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="text-gray-400">
              ✔️ أرضيات مقاومة للاحتكاك في الأماكن التجارية والصناعية
            </motion.li>
          </motion.ul>

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
          <Decor images={FloorData} setLoading={setLoading} />
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
};

export default Flooring;
