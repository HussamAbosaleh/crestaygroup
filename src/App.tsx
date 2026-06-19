import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CookieBanner from "./components/site/CookieBanner";
import { Nav } from "./components/site/Nav";
import {
  Hero,
  About,
  VisionMission,
  Values,
  Structure,
  Ventures,
  Strategy,
  Why,
  Contact,
  Footer,
} from "./components/site/Sections";

import { LegalPage } from "./components/site/LegalPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <VisionMission />
      <Values />
      <Structure />
      <Ventures />
      <Strategy />
      <Why />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/privacy"
          element={<LegalPage type="privacy" />}
        />

        <Route
          path="/legal-notice"
          element={<LegalPage type="imprint" />}
        />
      </Routes>
      <CookieBanner />
    </>
  );
}