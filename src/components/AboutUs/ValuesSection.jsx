import React from "react";
import { values } from "../../utils/Data";

const ValuesSection = () => {
  return (
    <section className="relative w-full bg-secondary text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-poppins font-semibold mb-4"
          data-aos="fade-up"
        >
          Our <span className="text-primary">Core Values</span>
        </h2>
        <p
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At ThinkPlus, our values reflect our dedication to mentorship,
          learning innovation, and community-driven success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="relative group bg-white/5 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-pink-500/40"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at top left, ${item.color}30, transparent 70%)`,
                  }}
                ></div>
                <div
                  className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}66, ${item.color}22)`,
                  }}
                >
                  <Icon size={28} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
