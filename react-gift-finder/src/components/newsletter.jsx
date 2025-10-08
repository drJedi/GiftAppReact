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
    // console.log(isInvalid)

    if (isInvalid) {
      setError(true);
    } else {
      // 
      const emailEncoded = encodeURIComponent(email);
      const referrer = encodeURIComponent(window.location.href);
      const isDev = process.env.NODE_ENV === 'development';
      
      // Poprzednie rozwiązanie z no-cors (nie pozwalało na obsługę odpowiedzi):
      // fetch(urlProd, { method: 'GET', mode: 'no-cors' })
      //   .finally(() => { onSuccess(email); });
      
      if (isDev) {
        const urlPath = `/web/email/signin.rest?email=${emailEncoded}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;
        fetch(urlPath, { method: 'GET' })
          .then(async (res) => {
            const text = await res.text();
            // console.log('Newsletter response status (dev):', res.status, text);
            
            if (res.ok) {
              // Wywołanie dataLayer przy sukcesie
              if (window.ceweDataLayer) {
                window.ceweDataLayer.push({
                  action: 'CWC_ON_NEWSLETTER_SIGNUP_SUCCESS',
                  payLoad: {
                    usage: 'default'
                  }
                });
                // console.log('✅ ceweDataLayer event sent: CWC_ON_NEWSLETTER_SIGNUP_SUCCESS');
              } else {
                // console.log('ℹ️ ceweDataLayer not available (dev mode) - event would be sent in production');
              }
              if (typeof onSuccess === "function") onSuccess(email);
            } else {
              // console.error('Newsletter signup failed:', res.status);
              setError(true);
            }
            return text;
          })
          .catch((e) => {
            // console.error('Newsletter request error (dev):', e);
            setError(true);
          });
      } else {
        
        const urlProd = `https://www.cewe.pl/web/email/signin.rest?email=${emailEncoded}&kid=29241&referrer=${referrer}&language=pl&redirect=false`;
        fetch(urlProd, { method: 'GET' })
          .then(async (res) => {
            const text = await res.text();
            // console.log('Newsletter response status (prod):', res.status, text);
            
            if (res.ok) {
              // Wywołanie dataLayer przy sukcesie
              if (window.ceweDataLayer) {
                window.ceweDataLayer.push({
                  action: 'CWC_ON_NEWSLETTER_SIGNUP_SUCCESS',
                  payLoad: {
                    usage: 'default'
                  }
                });
                // console.log('✅ ceweDataLayer event sent: CWC_ON_NEWSLETTER_SIGNUP_SUCCESS');
              } else {
                // console.warn('⚠️ ceweDataLayer not available - check if app is embedded on cewe.pl');
              }
              if (typeof onSuccess === "function") onSuccess(email);
            } else {
              // console.error('Newsletter signup failed:', res.status);
              setError(true);
            }
            return text;
          })
          .catch((e) => {
            // console.error('Newsletter request error (prod):', e);
            setError(true);
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
      <img src={`https://cdn.cewe.pl/GiftAppReact/imagesApp/newsletterImg.webp`} alt="newsletter" className="newsletter-img" />
        <h2 className="newsletter-title">Jeszcze zanim zaczniesz - NIESPODZIANKA na start!</h2>
        <p className="newsletter-text">Zapisz się do newslettera i odbierz <br/> -15%  na fotoprodukty CEWE</p>

        <div className="newsletter-form">
          <div className="newsletter-input-wrapper">
          <input name="email"
            className={`newsletter-input ${error ? "error" : ""}`}
            type="email"
            placeholder="Wpisz adres e-mail"
            value={email}
            onChange={(e) => handleChange(e.target.value)}
            />
          <button className="newsletter-button" onClick={handleSubmit}>ZAPISUJE SIĘ I SZUKAM PREZENTU</button>
            </div>
            
          <button className="newsletter-button-skip" onClick={handleSkip} type="button">pomijam</button>
          <p className="newsletter-text-bottom">Klikając „ZAPISUJĘ SIĘ”  dołączasz do społeczności CEWE. Cieszymy się, że jesteś z nami! Ty decydujesz, jak długo będzie trwała nasza wspólna przygoda.</p>
        </div>
        {error && <small className="error-text">Podaj poprawny adres email.</small>}
      </section>
    </div>
  );
};

export default Newsletter;
