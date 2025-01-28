import { img01, img02, img03, img04, img05 } from "@/public/images";

export const Routes = [
  {
    name: "الرئسيه",
    link: "/",
  },
  {
    name: "عنا",
    link: "/",
  },
  {
    name: "تواصل معنا",
    link: "/",
  },
  {
    name: "اراء العملاء",
    link: "/",
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
  },
  {
    title: "بناء عظم",
    description:
      "تشييد المباني (سكني – تجاري) حسب المواصفات والمقاييس للكود السعودي و تحت اشراف استشاريين متخصصين بطرق البناء الحديث ",
    src: img01.src,
  },
  {
    title: "أعمال تمديد و تركيب و صيانة الكهرباء",
    description:
      "ننفذ أعمال تمديد و تركيب وصيانة الكهرباء والشبكات بأفضل المواصفات والمقاييس مع ضمان التشغيل و الصيانة   ",
    src: img02.src,
  },
  {
    title: "أعمال الدهانات",
    description:
      "ننفذ أعمال الدهانات ( البوية ) وهي من أعمال التشطيبات الداخلية أو الخارجية الأخيرة تبدأ بعد الإنتهاء من أعمال اللياسة، وننفذ أنواع وأشكال كثيرة للدهانات مثل الدهانات العادية السادة و دهانات الفلفت و الستوكو ويتم التنفيذ بعد إنهاء جميع أعمال التشطيبات الأخرى و خصوصاً بلاط الأرضيات.",
    src: img03.src,
  },
  {
    title: "أعمال الجبس",
    description:
      "ننفذ أعمال الجبس العادي والجبس بورد سواء للأسقف أوالحوائط  وننفذ أيضا أعمال الإسمنت بورد ",
    src: img04.src,
  },
  {
    title: "أعمال الأرضيات",
    description:
      "ننفذ أعمال الارضيات حيث نقدم افضل خدمة لتركيب كافة انواع الارضيات مابين الرخام – السراميك - البورسلين- الباركيه - الإيبوكسي وغيرها ويتم انجازها باسرع وقت واعلى جودة",
    src: img05.src,
  },
];

export const dots = [
  {
    start: {
      lat: 64.2008,
      lng: -149.4937,
    }, // Alaska (Fairbanks)
    end: {
      lat: 34.0522,
      lng: -118.2437,
    }, // Los Angeles
  },
  {
    start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
    end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
  },
  {
    start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
    end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
  },
  {
    start: { lat: 51.5074, lng: -0.1278 }, // London
    end: { lat: 28.6139, lng: 77.209 }, // New Delhi
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
  },
  {
    start: { lat: 28.6139, lng: 77.209 }, // New Delhi
    end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
  },
];
