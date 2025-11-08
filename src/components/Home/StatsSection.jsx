import React from "react";
import CountUp from "react-countup";
import { stats } from "../../utils/Data";

const StatsSection = () => {
  return (
    <section className="relative w-full bg-secondary text-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute -top-20 sm:-top-32 right-1/2 translate-x-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-pink-500/10 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-center mb-3 sm:mb-4 px-4"
          data-aos="fade-up"
        >
          Start your prep the{" "}
          <span className="text-primary font-bold">THINKPLUS</span> way
        </h2>
        <p
          className="text-sm sm:text-base text-gray-300 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
        >
          Empowering students through personalized mentorship and structured
          learning. Our numbers speak for themselves.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white text-gray-800 rounded-xl sm:rounded-2xl shadow-md 
                hover:shadow-2xl py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 flex flex-col items-center 
                justify-center text-center transform duration-500 ease-out"
                data-aos={item.aos}
              >
                <div
                  className="relative z-10 p-3 sm:p-3.5 md:p-4 rounded-full bg-gray-100/60 mb-3 sm:mb-4 
                  group-hover:scale-110 transition-transform"
                  style={{ color: item.color }}
                >
                  <Icon
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="relative z-10 text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                  <CountUp
                    start={0}
                    end={item.value}
                    duration={2}
                    delay={0.3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>
                <p className="relative z-10 text-gray-600 font-medium text-xs sm:text-sm">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[200px] bg-linear-to-t from-pink-500/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default StatsSection;
