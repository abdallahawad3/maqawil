import Image from "next/image";
import { MaskContainer } from "./ui/svg-mask-effect";
import img from "@/public/01.jpeg";
const About = () => {
  return (
    <section className="container py-8" id="about">
      <h2 className="font-bold mb-5 md:text-lg lg:text-2xl xl:text-4xl text-center ">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent">
          نبذة عن الشركة
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4">
        <div>
          <Image src={img} className="w-full size-[700px] object-cover" alt="About Us Image" />
        </div>
        <div className="flex items-center justify-center  overflow-hidden">
          <MaskContainer
            size={10}
            revealSize={150}
            revealText={
              <p className="py-20 max-w-4xl mx-auto text-slate-600 text-center  text-4xl font-bold">
                نحن شركة مقاولات رائدة في جدة، نتمتع بخبرة واسعة في تنفيذ مشاريع الإنشاءات والتشطيب
                والترميم. نقدم حلولاً متكاملة تشمل تشطيبات المباني الداخلية والخارجية، أعمال
                الديكور، السباكة، الكهرباء، الدهانات، الأرضيات، والجبس. بفضل فريقنا من المهندسين
                والفنيين ذوي الكفاءة العالية
              </p>
            }>
            <p className="py-20">
              نحن شركة مقاولات رائدة في جدة، نتمتع بخبرة واسعة في تنفيذ مشاريع
              <span className="text-red-500"> الإنشاءات والتشطيب والترميم.</span> نقدم حلولاً
              متكاملة تشمل تشطيبات المباني الداخلية والخارجية، أعمال الديكور، السباكة، الكهرباء،
              الدهانات، الأرضيات، والجبس. بفضل فريقنا من المهندسين والفنيين
              <span className="text-red-500"> ذوي الكفاءة العالية </span>.
            </p>
          </MaskContainer>
        </div>
      </div>
    </section>
  );
};

export default About;
