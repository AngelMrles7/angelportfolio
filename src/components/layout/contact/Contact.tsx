import { useLanguage } from "../../../hooks/useLanguage";
import ContactForm from "./ContactForm";
const Contact = () => {
  const {
    language: { sections },
  } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__form-box">
        <h2 className="contact-section__title">{sections.contact.title}</h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
