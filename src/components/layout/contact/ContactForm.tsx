import { useForm } from "../../../hooks/useForm";
import { validationsForm } from "../../../utils/validationForm";
import { InitialForm } from "../../../interface/FormInterface";
import { useLanguage } from "../../../hooks/useLanguage";
import { NotificationMessage } from "../../ui/NotificationMessage";

const initialForm: InitialForm = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const {
    language: { formValidation },
  } = useLanguage();
  const {
    form,
    errors,
    isLoading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm<InitialForm>(initialForm, validationsForm, formValidation);

  return (
    <>
      <form className="contact-section__form">
        <div
          className={
            errors?.name
              ? "contact-section__form__input-box invalid"
              : "contact-section__form__input-box"
          }
        >
          <input
            type="text"
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          <label>Name</label>
          {errors?.name && (
            <p className="error-msg">
              <span>*</span>
              {errors.name}
            </p>
          )}
        </div>
        <div
          className={
            errors?.email
              ? "contact-section__form__input-box invalid"
              : "contact-section__form__input-box"
          }
        >
          <input
            id="email"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            className={errors?.email ? "invalid" : ""}
            required
          />
          <label htmlFor="email">Email</label>
          {errors?.email && (
            <p className="error-msg">
              <span>*</span>
              {errors.email}
            </p>
          )}
        </div>

        <div
          className={
            errors?.message
              ? "contact-section__form__textarea-box invalid"
              : "contact-section__form__textarea-box"
          }
        >
          <textarea
            name="message"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
            placeholder="Message"
          ></textarea>
          {errors?.message && (
            <p className="error-msg">
              <span>*</span>
              {errors.message}
            </p>
          )}
        </div>
        <div className="contact-section__form__button-box">
          <button
            type="submit"
            className="contact-section__form__button-box__button btn-send"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span className=""> Send message</span>
            <svg>
              <rect x="0" y="0" fill="none"></rect>
            </svg>
          </button>
        </div>
      </form>
      <NotificationMessage response={response} />
    </>
  );
};

export default ContactForm;
