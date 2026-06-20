import { useState, useEffect } from "react";
import { useI18n } from "../lib/i18n";

export default function CookieBanner() {
  const { t } = useI18n();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");

    import("../lib/anslytics").then(({ initAnalytics }) => {
      initAnalytics();
    });

    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
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
      <p>{t("cookie.text")}</p>

      <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
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
          {t("cookie.accept")}
        </button>

        <button
          onClick={declineCookies}
          style={{
            background: "transparent",
            color: "#fff",
            border: "1px solid #555",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {t("cookie.decline")}
        </button>
      </div>
    </div>
  );
}