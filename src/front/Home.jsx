import React from "react";
import Menu from "../front/layouts/Menu.jsx"; // Navbar
import Slideshow from "./Slider/Slider.jsx"; // Slideshow component
import Service from "./services/Services.jsx"; // Services component
import Footer from "./layouts/Footer.jsx"; // Footer component

const Home = () => {
  return (
    <div dir="rtl">
      {/* Navbar */}
      <Menu />

      {/* Slideshow */}
      <Slideshow />

      {/* Services Section */}
      <Service />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
