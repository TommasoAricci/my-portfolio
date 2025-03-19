import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Form.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../store';
import img from '../images/sending.jpg';

export default function ContactUs() {
  const form = useRef();
  const [formSent, setFormSent] = useState(false);
  const { language } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  console.log(isLoading);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(form.current);
    const emailParams = {
      nome: formData.get('user_name'),
      email: formData.get('user_email'),
      messaggio: formData.get('message'),
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
          console.log('SUCCESS!');
          setFormSent(true);
          form.current.reset();
          setIsLoading(false);

          setTimeout(() => {
            setFormSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Errore nell'invio del messaggio");
        }
      );
  };

  return (
    <>
      {!formSent && (
        <div className="contact-form">
          <img src={img} alt="" />
          <form ref={form} onSubmit={sendEmail}>
            <label>{language === 'IT' ? 'Nome' : 'Name'}</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>{language === 'IT' ? 'Messaggio' : 'Message'}</label>
            <textarea name="message" required />
            <button type="submit" disabled={isLoading}>
              {isLoading ? <FontAwesomeIcon className='spinner' icon={faSpinner} spin /> : language === 'IT' ? 'Invia' : 'Send'}
            </button>
          </form>
        </div>
      )}

      {formSent && (
        <div className="success-message">
          <div>
            <p>
              {language === 'IT' ? 'Messaggio inviato con successo' : 'Message sent successfully'}
              <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faCheck} />
            </p>
          </div>
          <p>
            {language === 'IT' ? 'Vi risponderò im prima possibile.' : 'I will get back to you as soon as possible.'}
          </p>
        </div>
      )}
    </>
  );
}
