import React from "react";
import HeroSection from "../components/Home/HeroSection";
import CoursesSection from "../components/Home/CoursesSection";
import StatsSection from "../components/Home/StatsSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />

      <CoursesSection />

      <StatsSection />

      <TestimonialsSection />
    </div>
  );
};

export default Home;
