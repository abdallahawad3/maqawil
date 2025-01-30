import type { Metadata } from "next";
import Gypsum from "./page";
export const metadata: Metadata = {
  title: "أعمال الجبس في جدة ومكة – تصاميم عصرية ولمسات فاخرة",
  description:
    "متخصصون في أعمال الجبس في جدة ومكة، نقدم أسقف جبسية معلقة، كرانيش وزخارف، قواطع جبسية، وديكورات تلفزيونية بأحدث التصاميم وبجودة عالية.",
  keywords:
    "أعمال الجبس, ديكورات جبس, أسقف جبسية, جبس معلق, جبس جدة, جبس مكة, زخارف جبسية, قواطع جبسية",
  openGraph: {
    title: "أعمال الجبس في جدة ومكة – تصاميم عصرية ولمسات فاخرة",
    description:
      "نقدم خدمات الجبس الاحترافية في جدة ومكة، تشمل الأسقف المعلقة، الكرانيش، الزخارف الجبسية، وديكورات الجدران والتلفزيون، بأفضل الخامات والتصاميم.",
    url: "https://yourwebsite.com/gypsum-services-jeddah-mecca",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/gypsum-services.jpg",
        width: 1200,
        height: 630,
        alt: "أعمال الجبس في جدة ومكة",
      },
    ],
    locale: "ar_SA",
  },
};

const layout = () => {
  return (
    <>
      <Gypsum />
    </>
  );
};

export default layout;
