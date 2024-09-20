import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// All pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import DemoProduct from "./pages/DemoProduct";

import { useDocTitle } from "./components/CustomHook";
import ScrollToTop from "./components/ScrollToTop";
import RemoveBgPrivacy from "./pages/BgRemoverPrivacy";
import BgRemoverTerms from "./pages/BgRemoverTerms";
import ArtGeniusTerms from "./pages/AIArtTerms";
import ArtGeniusPrivacy from "./pages/AIArtPrivacy";
import BlurPicPrivacy from "./pages/BlurPicPrivacy";
import BlurPicTerms from "./pages/BlurPicTerms";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };

    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);

  useDocTitle("SMOB | Molad e Konsult - Bespoke Web and Mobile Applications");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/bgremover/privacy" element={<RemoveBgPrivacy />} />
            <Route path="/bgremover/terms" element={<BgRemoverTerms />} />
            <Route path="/artgenius/privacy" element={<ArtGeniusPrivacy />} />
            <Route path="/artgenius/terms" element={<ArtGeniusTerms />} />
            <Route path="/genart/privacy" element={<ArtGeniusPrivacy />} />
            <Route path="/genart/terms" element={<ArtGeniusTerms />} />
            <Route path="/blurpic/privacy" element={<BlurPicPrivacy />} />
            <Route path="/blurpic/terms" element={<BlurPicTerms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
