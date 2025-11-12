import React from "react";
import { User } from "lucide-react";
import { mentors } from "../../utils/Data";

const MentorsSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-800 py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-poppins font-semibold mb-4 text-gray-900"
          data-aos="fade-up"
        >
          Meet Our <span className="text-primary">Mentors</span>
        </h2>
        <p
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 sm:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Learn from India's finest educators and mentors who bring experience,
          expertise, and mentorship to help students achieve their goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white border shadow-sm border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-300 overflow-hidden"
            >
              <div className="relative mb-6 z-10">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-linear-to-br from-pink-50 via-violet-50 to-white flex items-center justify-center border-2 border-gray-200 transition-all duration-300 group-hover:border-pink-400 group-hover:scale-105">
                  <User
                    size={36}
                    className="sm:w-10 sm:h-10 md:w-11 md:h-11 text-pink-500 transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 rounded-full border-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin"></div>
                </div>

                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-6 sm:w-20 sm:h-8 bg-pink-400/10 rounded-full blur-xl"></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2 transition-colors duration-300 group-hover:text-pink-600">
                  {mentor.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-2 font-medium">
                  {mentor.degree}
                </p>
                <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-linear-to-r from-pink-50 to-violet-50 border border-pink-100 transition-all duration-300 group-hover:border-pink-300">
                  <p className="text-secondary text-xs sm:text-sm font-medium">
                    {mentor.expert}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-pink-500 to-violet-500 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
