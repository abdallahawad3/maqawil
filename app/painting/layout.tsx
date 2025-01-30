import type { Metadata } from "next";
import Painting from "./page";

export const metadata: Metadata = {
  title: "أعمال الدهانات في جدة ومكة – دهانات داخلية وخارجية بجودة عالية",
  description:
    "متخصصون في أعمال الدهانات في جدة ومكة، نقدم دهانات داخلية وخارجية عالية الجودة، مع استخدام أحدث التقنيات للحصول على تشطيبات مثالية تدوم طويلاً.",
  keywords:
    "أعمال الدهانات, دهانات جدة, دهانات مكة, دهانات داخلية, دهانات خارجية, تأثيرات جدارية, طلاء الجدران",
  openGraph: {
    title: "أعمال الدهانات في جدة ومكة – دهانات داخلية وخارجية بجودة عالية",
    description:
      "نحن نقدم خدمات دهانات احترافية في جدة ومكة، تشمل الدهانات الداخلية والخارجية، التأثيرات الجدارية، ودهانات مقاومة للعوامل الجوية، مع لمسات فنية مميزة.",
    url: "https://yourwebsite.com/painting-services-jeddah-mecca",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/painting-services.jpg",
        width: 1200,
        height: 630,
        alt: "أعمال الدهانات في جدة ومكة",
      },
    ],
    locale: "ar_SA",
  },
};

const layout = () => {
  return (
    <>
      <Painting />
    </>
  );
};

export default layout;
