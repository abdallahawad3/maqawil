import type { Metadata } from "next";
import BoneBuilding from "./page";
export const metadata: Metadata = {
  title: "بناء عظم في جدة ومكة – الجودة والمتانة من الأساس",
  description:
    "نحن نقدم خدمات بناء العظم في جدة ومكة بأعلى معايير الجودة والمتانة، مع استخدام أحدث التقنيات وأفضل المواد لضمان هيكل قوي يدوم طويلاً.",
  keywords: "بناء عظم جدة, بناء عظم مكة, مقاول بناء, هيكل خرساني, تشييد المباني, أساسات قوية",
  openGraph: {
    title: "بناء عظم في جدة ومكة – الجودة والمتانة من الأساس",
    description:
      "إذا كنت تبحث عن بناء عظم بجودة عالية في جدة أو مكة، نحن نوفر لك أفضل الحلول بأعلى معايير البناء والإشراف الهندسي الدقيق.",
    url: "https://yourwebsite.com/structure-jeddah-mecca",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/images/construction-site.jpg",
        width: 1200,
        height: 630,
        alt: "مشروع بناء عظم في جدة ومكة",
      },
    ],
    locale: "ar_SA",
  },
};

const layout = () => {
  return (
    <>
      <BoneBuilding />
    </>
  );
};

export default layout;
