import React, { useState } from "react";
const Newsletter = ({ onSuccess, onSkip }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setEmail(value);
    setError(false);
  };

  const handleSubmit = () => {
    const isInvalid = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
      email
    );
    console.log(isInvalid)

    if (isInvalid) {
      setError(true);
    } else {
      // Zakoduj cały adres email (np. @ -> %40)
      const emailEncoded = encodeURIComponent(email);
      const referrer = encodeURIComponent(window.location.href);
      const isDev = process.env.NODE_ENV === 'development';

      if (isDev) {
        const urlPath = `/api/newsletter/web/email/signin.rest?email=${emailEncoded}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;
        fetch(urlPath, { method: 'GET' })
          .then(async (res) => {
            const text = await res.text();
            console.log('Newsletter response status (dev):', res.status, text);
            if (typeof onSuccess === "function") onSuccess(email);
            return text;
          })
          .catch((e) => {
            console.log('Newsletter request error (dev):', e);
            if (typeof onSuccess === "function") onSuccess(email);
          });
      } else {
        // Production (GitHub Pages) – brak proxy. Wyślij bezpośrednio z no-cors i ignoruj odpowiedź.
        const urlProd = `https://www.cewe.pl/web/email/signin.rest?email=${emailEncoded}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;
        fetch(urlProd, { method: 'GET', mode: 'no-cors' })
          .finally(() => {
            if (typeof onSuccess === "function") onSuccess(email);
          });
      }
    }
  };

  const handleSkip = () => {
    try {
      localStorage.setItem('newsletterSkipped', '1');
    } catch {}
    if (typeof onSkip === "function") onSkip();
  };

  return (
    <div className="newsletter">
      <section className="newsletter-section">
      <img src={`${process.env.PUBLIC_URL}/imagesApp/newsletterImg.webp`} alt="newsletter" className="newsletter-img" />
        <h2 className="newsletter-title">Zapisz się do newslettera</h2>
        <p className="newsletter-text"> i odbierz -15% <br/> na fotoprodukty CEWE</p>

        <div className="newsletter-form">
          <div className="newsletter-input-wrapper">
          <input name="email"
            className={`newsletter-input ${error ? "error" : ""}`}
            type="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            />
          <button className="newsletter-button" onClick={handleSubmit}>Zapisz się</button>
            </div>
          <button className="newsletter-button-skip" onClick={handleSkip} type="button">Pomiń</button>
        </div>
        {error && <small className="error-text">Podaj poprawny adres email.</small>}
      </section>
    </div>
  );
};

export default Newsletter;
