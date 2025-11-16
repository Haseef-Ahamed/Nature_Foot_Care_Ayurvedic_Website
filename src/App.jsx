import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import "@fontsource/philosopher/400.css";
import "@fontsource/philosopher/700.css";
import Treatments from "./pages/treatments";

import About from "./pages/About";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import FooterNew from "./components/FooterNew";

const App = () => {
  return (
    <div>
      <FloatingWhatsapp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      {/* <FooterNew /> */}
    </div>
  );
};

export default App;
