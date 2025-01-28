import Image from "next/image";
import { contact } from "@/public/images";
export function ContactInfoDisplay() {
  return (
    <div className=" dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          تواصل معنا نصل اليك في غضون ثواني
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">تواصل معانا</p>
      </div>
      <div className="w-full">
        <Image src={contact} alt="Contact us image" />
      </div>
    </div>
  );
}
