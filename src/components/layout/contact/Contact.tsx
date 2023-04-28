import React from "react";

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="section-contact__form-box">
        <h2 className="section-contact__title">Contact me</h2>

        <form className="section-contact__form">
          <div className="section-contact__form__input-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>
          <div className="section-contact__form__input-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>
          <div className="section-contact__form__input-box">
            <input type="text" name="subject" required />
            <label>Subject</label>
          </div>
          <div className="section-contact__form__textarea-box">
            <textarea name="message" placeholder="Message"></textarea>
          </div>
          <div className="section-contact__form__button-box">
            <button
              type="submit"
              className="section-contact__form__button-box__button btn-send"
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
