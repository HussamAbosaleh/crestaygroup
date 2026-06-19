import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        background: "#111",
        color: "#fff",
        padding: "16px",
        borderRadius: "12px",
        zIndex: 9999,
      }}
    >
      <p>
        This website uses cookies and Google Analytics to improve user
        experience and measure website performance.
      </p>

      <button
        onClick={acceptCookies}
        style={{
          background: "#c9a66b",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Accept
      </button>
    </div>
  );
}