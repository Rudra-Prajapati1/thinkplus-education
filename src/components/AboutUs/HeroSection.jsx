import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-800 py-6 sm:py-8 md:py-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold mb-3 sm:mb-4 text-gray-900 px-4"
          data-aos="fade-up"
        >
          About <span className="text-pink-500">ThinkPlus</span>
        </h1>
        <p
          className="text-gray-600 text-base sm:text-lg max-w-2xl mb-10 sm:mb-12 md:mb-16 leading-relaxed px-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At ThinkPlus, we don't just prepare students for exams — we help them
          build confidence, character, and clarity through structured mentorship
          and innovative learning methods.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16 w-full">
          <div
            className="text-left sm:text-left space-y-3 sm:space-y-4 md:space-y-5 px-2"
            data-aos="fade-right"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To empower students to reach their full potential through
              personalized education and expert mentorship. Our mission extends
              beyond teaching — we aim to transform learning into an inspiring
              journey of growth.
            </p>
          </div>

          <div
            className="relative flex justify-center order-first lg:order-0"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <img
              src="/assets/aboutus.png"
              alt="ThinkPlus Team"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md rounded-xl sm:rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 right-1/2 translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-pink-500/20 blur-[60px] sm:blur-[80px] rounded-full"></div>
          </div>

          <div
            className="text-left sm:text-left space-y-3 sm:space-y-4 md:space-y-5 px-2"
            data-aos="fade-left"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              To become a trusted academic partner for every learner by
              providing accessible, high-quality education built on innovation,
              integrity, and impact. We envision a future where learning is
              deeply personal, powerful, and limitless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
