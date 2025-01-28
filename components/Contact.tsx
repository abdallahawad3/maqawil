import { ContactForm } from "./ContactForm";
import { ContactInfoDisplay } from "./ContactMap";

const Contact = () => {
  return (
    <section className="container py-20" id="contact">
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
