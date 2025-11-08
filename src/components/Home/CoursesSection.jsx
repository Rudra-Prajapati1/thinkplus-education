import React, { useEffect } from "react";
import { courses } from "../../utils/Data";
import CourseCard from "../Courses/CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoursesSection = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-primary mb-3 sm:mb-4">
          Our Courses
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
          Prepare for competitive exams like CAT, IPMAT, and CLAT the ThinkPlus
          way — through personalized mentorship and structured learning.
        </p>

        <div className="relative px-4 sm:px-8 lg:px-0">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 25 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-8 sm:pb-10 md:pb-12"
          >
            {courses.map((course, index) => (
              <SwiperSlide className="px-2 py-2 sm:py-3 md:py-4" key={index}>
                <div data-aos="fade-up" data-aos-delay={index * 100}>
                  <CourseCard {...course} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons for larger screens */}
          <button
            className="custom-prev absolute -left-4 sm:-left-6 lg:-left-12 xl:-left-20 top-1/2 
            -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-xl border border-gray-200 
            rounded-full p-2 sm:p-3 md:p-4 transition-all hover:scale-110 hidden sm:flex 
            items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <button
            className="custom-next absolute -right-4 sm:-right-6 lg:-right-12 xl:-right-20 top-1/2 
            -translate-y-1/2 z-10 bg-white shadow-md hover:shadow-xl border border-gray-200 
            rounded-full p-2 sm:p-3 md:p-4 transition-all hover:scale-110 hidden sm:flex 
            items-center justify-center"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
