import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "../style/Form.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactUs() {
  const form = useRef();
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
    const emailParams = {
      nome: formData.get("user_name"),
      email: formData.get("user_email"),
      messaggio: formData.get("message"),
    };
  
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setFormSent(true);
          form.current.reset();
  
          setTimeout(() => {
            setFormSent(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Errore nell'invio del messaggio");
        }
      );
  };

  return (
    <>
      <div className="contact-form">
        {!formSent && <h2 style={{ color: '#ffd700' }}>Oppure scrivimi</h2>}
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <button type="submit">Send</button>
        </form>
        {formSent && (
          <div className="success-message">
            <p>
              Messaggio inviato con successo <FontAwesomeIcon icon={faCheck} />
            </p>
          </div>
        )}
      </div>
    </>
  );
}
