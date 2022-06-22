import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About/About";
import AboutGutMind from "../Pages/About/AboutGutMind";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/contact/contact";
import Team from "../Pages/Team/Team";
import News from "../Pages/News/News";
import OurBussiness from "../Pages/Bussiness/OurBussiness";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/AboutGutMind" element={<AboutGutMind />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/News" element={<News />} />
          <Route path="/OurBussiness" element={<OurBussiness />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
