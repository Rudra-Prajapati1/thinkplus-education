import React from "react";
import HeroSection from "../components/AboutUs/HeroSection";
import JourneySection from "../components/AboutUs/JourneySection";
import ValuesSection from "../components/AboutUs/ValuesSection";
import MentorsSection from "../components/AboutUs/MentorsSection";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />

      <JourneySection />

      <ValuesSection />

      <MentorsSection />
    </div>
  );
};

export default AboutUs;
