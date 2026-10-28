import '../styles/components/_cookiebar.scss'

import { useState ,useEffect } from "react";

function CookieBar() {
  const [consent, setConsent] = useState(
    () => localStorage.getItem("analyticsConsent")
  );

  const chooseConsent = (choice) => {
    localStorage.setItem("analyticsConsent", choice);
    setConsent(choice);
  };


  useEffect(() => {
    if (consent !== "accepted") return;
    if (document.getElementById("google-analytics")) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
        window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-LG955QDWDZ");

    const script = document.createElement("script");
    script.id = "google-analytics";
    script.async = true;
    script.src =
        "https://www.googletagmanager.com/gtag/js?id=G-LG955QDWDZ";

    document.head.appendChild(script);
    }, [consent]);

    if (consent !== null) return null;

  return (
    <div className="cookiebar">
      <p>Google Analytics uses cookies in order to measure site traffic.</p>
      <button onClick={() => chooseConsent("accepted")}>Accept</button>
      <button className='cookiedecline' onClick={() => chooseConsent("rejected")}>Decline</button>
    </div>
  );
}

export default CookieBar;
  
  
  
