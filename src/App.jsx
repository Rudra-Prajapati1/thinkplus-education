import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-[60vh] text-2xl font-semibold text-red-600">
                404 | Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
