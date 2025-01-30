import type { Metadata } from "next";
import Electric from "./page";

export const metadata: Metadata = {
  title: "تمديد وتركيب وصيانة الكهرباء في جدة ومكة – خدمات كهربائية موثوقة",
  description:
    "متخصصون في أعمال الكهرباء في جدة ومكة، نقدم خدمات التمديد والتركيب والصيانة بجودة عالية ومعايير أمان صارمة، لضمان أفضل أداء لنظامك الكهربائي.",
  keywords:
    "تمديد كهرباء, تركيب كهرباء, صيانة كهرباء, كهربائي جدة, كهربائي مكة, إصلاح أعطال كهربائية",
  openGraph: {
    title: "تمديد وتركيب وصيانة الكهرباء في جدة ومكة – خدمات كهربائية موثوقة",
    description:
      "نحن نقدم خدمات كهربائية متكاملة تشمل تمديد الشبكات، تركيب لوحات التوزيع، إصلاح الأعطال، وأنظمة الإنارة الذكية، بأعلى معايير الأمان والجودة.",
    url: "https://yourwebsite.com/electrical-services-jeddah-mecca",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/electrical-services.jpg",
        width: 1200,
        height: 630,
        alt: "تمديد وتركيب وصيانة الكهرباء في جدة ومكة",
      },
    ],
    locale: "ar_SA",
  },
};

const layout = () => {
  return (
    <>
      <Electric />
    </>
  );
};

export default layout;
