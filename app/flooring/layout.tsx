import Flooring from "./page";

export const metadata = {
  title: "أعمال الأرضيات في جدة ومكة – تركيب أرضيات خشبية، سيراميك ورخام",
  description:
    "متخصصون في تركيب الأرضيات في جدة ومكة، نقدم خدمات تركيب الأرضيات الخشبية، السيراميك، الرخام، البورسلين، PVC وغيرها من المواد العصرية ذات الجودة العالية.",
  keywords:
    "أعمال الأرضيات, تركيب أرضيات, أرضيات خشبية, أرضيات سيراميك, أرضيات رخام, أرضيات بورسلين, أرضيات PVC, أرضيات جدة, أرضيات مكة",
  openGraph: {
    title: "أعمال الأرضيات في جدة ومكة – تركيب أرضيات خشبية، سيراميك ورخام",
    description:
      "نحن نقدم خدمات تركيب أرضيات احترافية في جدة ومكة، تشمل الأرضيات الخشبية، السيراميك، الرخام، PVC، وغيرها من الأنواع، مع التركيز على الجودة والدقة في التنفيذ.",
    url: "https://yourwebsite.com/flooring-services-jeddah-mecca",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/flooring-services.jpg",
        width: 1200,
        height: 630,
        alt: "أعمال الأرضيات في جدة ومكة",
      },
    ],
    locale: "ar_SA",
  },
};

const layout = () => {
  return (
    <>
      <Flooring />
    </>
  );
};

export default layout;
