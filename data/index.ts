import { img01, img02, img03, img04, img05 } from "@/public/images/hero";
import {
  boun02,
  boun03,
  boun05,
  boun06,
  boun07,
  boun08,
  boun09,
} from "@/public/images/bounBuilding";
import {
  decor01,
  decor02,
  decor03,
  decor04,
  decor05,
  decor07,
  decor08,
  decor09,
} from "@/public/images/decor";
import { electric01, electric02, electric03, electric04 } from "@/public/images/electerc";
import {
  floor01,
  floor02,
  floor03,
  floor05,
  floor06,
  floor07,
  floor08,
} from "@/public/images/floor";
import {
  gypsum01,
  gypsum02,
  gypsum03,
  gypsum05,
  gypsum06,
  gypsum07,
  gypsum08,
  gypsum09,
} from "@/public/images/Gypsum";
import {
  painting01,
  painting02,
  painting03,
  painting05,
  painting06,
} from "@/public/images/painting";

export const Routes = [
  {
    name: "الرئسيه",
    link: "hero",
  },
  {
    name: "خداماتنا",
    link: "services",
  },
  {
    name: "عنا",
    link: "about",
  },
  {
    name: "تواصل معنا",
    link: "contact",
  },
];

export const Images = [
  "https://saadihg.com/wp-content/uploads/2024/08/5-1-2.jpg",
  "https://saadihg.com/wp-content/uploads/2024/02/3.jpg",
  "https://mar-decor.com/images/-%D9%85%D9%86%D8%A7%D8%B2%D9%84-%D8%AC%D8%AF%DB%8C%D8%AF_1615222582.jpg",
  "https://aqarat.see.news/wp-content/uploads/2021/04/%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA.jpg",
  "https://khdmatkuwait.com/wp-content/uploads/2024/02/skyscrapers-construction-site-modern-buildings-new-york-scaled.jpg",
];

export const projects = [
  {
    title: "ديكورات",
    description: "تصميم داخلي و خارجي نحن نبتكر وننفذ تصميمات تعكس هويتك وتحقق رغبتك.",
    src: img05.src,
    url: "decor",
  },
  {
    title: "بناء عظم",
    description:
      "تشييد المباني (سكني – تجاري) حسب المواصفات والمقاييس للكود السعودي و تحت اشراف استشاريين متخصصين بطرق البناء الحديث ",
    src: img01.src,
    url: "bone-building",
  },
  {
    title: "أعمال تمديد و تركيب و صيانة الكهرباء",
    description:
      "ننفذ أعمال تمديد و تركيب وصيانة الكهرباء والشبكات بأفضل المواصفات والمقاييس مع ضمان التشغيل و الصيانة   ",
    src: img02.src,
    url: "electric",
  },
  {
    title: "أعمال الدهانات",
    description:
      "ننفذ أعمال الدهانات ( البوية ) وهي من أعمال التشطيبات الداخلية أو الخارجية الأخيرة تبدأ بعد الإنتهاء من أعمال اللياسة، وننفذ أنواع وأشكال كثيرة للدهانات مثل الدهانات العادية السادة و دهانات الفلفت و الستوكو ويتم التنفيذ بعد إنهاء جميع أعمال التشطيبات الأخرى و خصوصاً بلاط الأرضيات.",
    src: img03.src,
    url: "painting",
  },
  {
    title: "أعمال الجبس",
    description:
      "ننفذ أعمال الجبس العادي والجبس بورد سواء للأسقف أوالحوائط  وننفذ أيضا أعمال الإسمنت بورد ",
    src: img04.src,
    url: "gypsum",
  },
  {
    title: "أعمال الأرضيات",
    description:
      "ننفذ أعمال الارضيات حيث نقدم افضل خدمة لتركيب كافة انواع الارضيات مابين الرخام – السراميك - البورسلين- الباركيه - الإيبوكسي وغيرها ويتم انجازها باسرع وقت واعلى جودة",
    src: img05.src,
    url: "flooring",
  },
];

export const DecorData = [
  {
    url: decor01.src,
    alt: "تصميم داخلي فاخر بألوان هادئة وإضاءة عصرية",
  },
  {
    url: decor02.src,
    alt: "ديكور عصري أنيق يعكس الفخامة والدفء",
  },
  {
    url: decor03.src,
    alt: "تصميم راقٍ لمساحات معيشة مريحة ومتميزة",
  },
  {
    url: decor04.src,
    alt: "لمسات فنية في تصميم داخلي يجمع بين الحداثة والكلاسيكية",
  },
  {
    url: decor05.src,
    alt: "إبداع في توزيع الألوان والإضاءة لديكور متناغم",
  },
  {
    url: decor07.src,
    alt: "ديكور فاخر بأناقة الخشب والتفاصيل المذهلة",
  },
  {
    url: decor08.src,
    alt: "تصميم داخلي يوحي بالدفء والراحة بلمسات عصرية",
  },
  {
    url: decor09.src,
    alt: "مساحات مفتوحة بإضاءة طبيعية تعزز الأناقة والجمال",
  },
];

export const ElectricData = [
  {
    url: electric01.src,
    alt: "تركيب أنظمة كهربائية حديثة بكفاءة وأمان",
  },
  {
    url: electric02.src,
    alt: "تصميم وتوزيع الإضاءة بأسلوب احترافي ومبتكر",
  },
  {
    url: electric03.src,
    alt: "تمديدات كهربائية عالية الجودة للمباني والمنازل",
  },
  {
    url: electric04.src,
    alt: "إصلاح وصيانة الشبكات الكهربائية بأحدث التقنيات",
  },
];

export const FloorData = [
  {
    url: floor01.src,
    alt: "أرضيات خشبية فاخرة تضيف لمسة من الدفء والأناقة",
  },
  {
    url: floor02.src,
    alt: "تصميم عصري للأرضيات يجمع بين الفخامة والمتانة",
  },
  {
    url: floor03.src,
    alt: "أرضيات رخامية راقية تعكس الفخامة والجودة",
  },
  {
    url: floor05.src,
    alt: "تصاميم أرضيات سيراميكية مميزة تناسب جميع الأذواق",
  },
  {
    url: floor06.src,
    alt: "أرضيات عصرية بتشطيبات أنيقة ولمسات إبداعية",
  },
  {
    url: floor07.src,
    alt: "تنفيذ أرضيات باركيه بجودة عالية وأناقة مثالية",
  },
  {
    url: floor08.src,
    alt: "تصميم فريد للأرضيات يعزز جمال وراحة المساحة",
  },
];

export const BuildingData = [
  {
    url: boun02.src,
    alt: "أعمال بناء عظم بأساسات قوية وهياكل متينة",
  },
  {
    url: boun03.src,
    alt: "تنفيذ مشاريع البناء العظمي وفق أعلى المعايير الهندسية",
  },
  {
    url: boun05.src,
    alt: "مراحل تشييد الهياكل الخرسانية للمباني السكنية والتجارية",
  },
  {
    url: boun06.src,
    alt: "إنشاء مباني عظمية بتصاميم هندسية دقيقة",
  },
  {
    url: boun07.src,
    alt: "تنفيذ أعمدة وأسقف خرسانية بجودة عالية",
  },
  {
    url: boun08.src,
    alt: "أعمال العظم للمشاريع السكنية والفيلات بأحدث التقنيات",
  },
  {
    url: boun09.src,
    alt: "تشييد المباني العظمية وفق معايير السلامة والجودة",
  },
];

export const GypsumData = [
  {
    url: gypsum01.src,
    alt: "تصاميم جبسية فاخرة للأسقف بلمسات إبداعية",
  },
  {
    url: gypsum02.src,
    alt: "ديكورات جبس حديثة لإضافة الأناقة للمساحات الداخلية",
  },
  {
    url: gypsum03.src,
    alt: "أسقف جبسية مزخرفة بإضاءة مخفية لمظهر جذاب",
  },
  {
    url: gypsum05.src,
    alt: "جدران جبسية بتصاميم فنية تعزز الجمال والرفاهية",
  },
  {
    url: gypsum06.src,
    alt: "ديكورات جبس راقية تناسب الفلل والمنازل العصرية",
  },
  {
    url: gypsum07.src,
    alt: "ألواح جبسية مقاومة للرطوبة بتشطيبات احترافية",
  },
  {
    url: gypsum08.src,
    alt: "قواطع جبسية لتقسيم المساحات بأسلوب أنيق",
  },
  {
    url: gypsum09.src,
    alt: "أسقف جبس بورد حديثة بأشكال هندسية رائعة",
  },
];

export const PaintingData = [
  {
    url: painting01.src,
    alt: "دهانات جدارية بألوان ناعمة تضيف لمسة من الهدوء والراحة",
  },
  {
    url: painting02.src,
    alt: "أعمال دهان مبتكرة تمنح الجدران مظهراً عصريًا وجذابًا",
  },
  {
    url: painting03.src,
    alt: "دهانات ديكورية عالية الجودة تنسجم مع تصميم المساحة",
  },
  {
    url: painting05.src,
    alt: "دهانات جدران بألوان زاهية تضفي لمسة حيوية على المكان",
  },
  {
    url: painting06.src,
    alt: "دهانات احترافية تزيد من جمال تفاصيل المساحة الداخلية",
  },
];
