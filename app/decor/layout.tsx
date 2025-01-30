import type { Metadata } from "next";
import DecorPage from "./page";

export const metadata: Metadata = {
  title: "ديكورات داخلية وخارجية – تصميم يلبي رؤيتك",
  description:
    "نحن متخصصون في تصميم وتنفيذ الديكورات الداخلية والخارجية بأسلوب يعكس هويتك ويلبي رغباتك، مع تصاميم فريدة تجمع بين الجمال، الوظيفة، والإبداع.",
  keywords: "ديكورات, تصميم داخلي, تصميم خارجي, ديكور حديث, أفكار ديكور",
  openGraph: {
    title: "ديكورات داخلية وخارجية – تصميم يلبي رؤيتك",
    description:
      "تحقق من أحدث تصاميم الديكور الداخلي والخارجي التي تعكس أسلوبك الفريد وتحقق أحلامك.",
    url: "https://yourwebsite.com/decor",
    type: "website",
    images: [
      {
        url: "https://swiperjs.com/demos/images/nature-1.jpg",
        width: 1200,
        height: 630,
        alt: "تصميم داخلي وخارجي فاخر",
      },
    ],
  },
};

const layout = () => {
  return (
    <>
      <DecorPage />
    </>
  );
};

export default layout;
