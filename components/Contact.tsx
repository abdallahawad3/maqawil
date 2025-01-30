import { ContactForm } from "./ContactForm";
import { ContactInfoDisplay } from "./ContactInfo";

const Contact = () => {
  return (
    <section className="container py-20" id="contact">
      <div className="text-center py-5">
        <h1 className="font-bold text-lg md:text-xl lg:text-3xl text-gray-400">
          تواصل معنا بسهولة عبر الفورم أو الهاتف!
        </h1>
        <p className="mt-2 text-gray-500">
          نحن هنا لخدمتك، يمكنك الاتصال بنا مباشرة أو ملء النموذج للتواصل السريع!
        </p>
        <div className="mt-4">
          <a
            href="https://api.whatsapp.com/send?phone=9660569088789"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg text-lg">
            اتصل بنا الآن
          </a>
          <span className="mx-4 text-gray-500">أو</span>
          <span>ملء النموذج التالي</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
        <div>
          <ContactForm />
        </div>
        <div>
          <ContactInfoDisplay />
        </div>
      </div>
    </section>
  );
};

export default Contact;
