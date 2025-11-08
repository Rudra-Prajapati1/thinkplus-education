import React from "react";
import { ArrowRight } from "lucide-react";

const CourseCard = ({ title, subtitle, desc, icon: Icon, color }) => {
  return (
    <div
      className="group relative bg-white/95 hover:bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md 
      transition-all duration-500 overflow-hidden border border-gray-100 w-full"
    >
      <div
        className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
        style={{ backgroundColor: color }}
      ></div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between items-center text-center relative z-10 h-80 sm:h-[340px] md:h-[360px]">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <div
            className="p-3 sm:p-4 md:p-5 rounded-full bg-gray-50 shadow-inner group-hover:shadow-md 
            group-hover:scale-110 transition-all duration-300"
            style={{ color: color }}
          >
            <Icon
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
              strokeWidth={1.5}
            />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-primary transition-all px-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 px-2">{subtitle}</p>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1 px-2">
            {desc}
          </p>
        </div>

        <button
          className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-pink-500 font-medium 
          text-sm sm:text-base group-hover:gap-3 transition-all"
        >
          Learn More <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(180deg, ${color}15, transparent 80%)`,
        }}
      ></div>

      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full 
        blur-3xl opacity-0 group-hover:opacity-40 transition-all duration-700"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
};

export default CourseCard;
