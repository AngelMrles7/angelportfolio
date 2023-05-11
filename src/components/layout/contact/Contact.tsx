import React from "react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__form-box">
        <h2 className="contact-section__title">Contact me</h2>

        <form className="contact-section__form">
          <div className="contact-section__form__input-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="contact-section__form__input-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="contact-section__form__input-box">
            <input type="text" name="subject" required />
            <label>Subject</label>
          </div>
          <div className="contact-section__form__textarea-box">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div className="contact-section__form__button-box">
            <button
              type="submit"
              className="contact-section__form__button-box__button btn-send"
            >
              <span className=""> Send message</span>
              <svg>
                <rect x="0" y="0" fill="none"></rect>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
