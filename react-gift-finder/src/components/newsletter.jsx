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
    // let urlNews=`https://www.cewe.pl/web/email/signin.rest?email=${user}%${prefix}&kid=29241&referrer=https%3A%2F%2Fwww.cewe.pl%2Fblog%2Fwskazowki-projektowe%2Fzrob-wlasne-puzzle.html&language=pl&redirect=false`;

    if (isInvalid) {
      setError(true);
    } else {
      // Zakoduj cały adres email (np. @ -> %40) zamiast składać z dwóch części
      const emailEncoded = encodeURIComponent(email);
      const referrer = encodeURIComponent(window.location.href);
      const urlPath = `/api/newsletter/web/email/signin.rest?email=${emailEncoded}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;

      fetch(urlPath, { method: 'GET' })
        .then(async (res) => {
          const text = await res.text();
          console.log('Newsletter response status:', res.status, text);
          if (res.ok) {
            if (typeof onSuccess === "function") onSuccess(email);
            return text;
          }
          // Fallback: spróbuj format user%prefix
          const [beforeAt, afterAt] = email.split('@');
          const userPart = encodeURIComponent(beforeAt || '');
          const prefixPart = encodeURIComponent(afterAt || '');
          const legacyUrl = `/api/newsletter/web/email/signin.rest?email=${userPart}%${prefixPart}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;
          return fetch(legacyUrl, { method: 'GET' })
            .then(async (r2) => {
              const t2 = await r2.text();
              console.log('Newsletter legacy response status:', r2.status, t2);
              if (typeof onSuccess === "function") onSuccess(email);
              return t2;
            });
        })
        .catch((e) => {
          console.log('Newsletter request error:', e);
          if (typeof onSuccess === "function") {
            onSuccess(email);
          }
        });
    }
  };

  return (
    <div className="newsletter">
      <section>
        <h2 className="newsletter-title">Zapisz się do newslettera</h2>
        <p className="newsletter-text">Zapisz się do newslettera i odbierz -15% na fotoprodukty CEWE</p>

        <div className="newsletter-form">
          <div className="newsletter-input-wrapper">
          <input name="email"
            className={error ? "error" : ""}
            type="email"
            placeholder="Twój email"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            />
          <button className="newsletter-button" onClick={handleSubmit}>Zapisz</button>
            </div>
          <button className="newsletter-button-skip" onClick={onSkip} type="button">Pomiń</button>
        </div>
        {error && <small className="error-text">Podaj poprawny adres email.</small>}
      </section>
    </div>
  );
};

export default Newsletter;
