import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../utils/Data";
import { User } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-white text-gray-900 py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold mb-3 sm:mb-4 px-4"
          data-aos="fade-up"
        >
          What students have to say about{" "}
          <span className="text-primary font-bold">THINKPLUS</span>
        </h2>
        <p
          className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
        >
          Hear from students who turned their aspirations into achievements with
          ThinkPlus.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          speed={1300}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12 sm:pb-14 md:pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="h-full">
              <div
                className="group relative bg-secondary text-white rounded-xl sm:rounded-2xl shadow-sm 
                transition-all duration-500 py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6 flex flex-col 
                justify-between h-full min-h-[280px] sm:min-h-[300px] md:min-h-80"
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
              >
                <p className="text-gray-200 leading-relaxed mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base grow">
                  "{t.feedback}"
                </p>

                <div className="flex items-center gap-2.5 sm:gap-3 mt-auto">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-primary shrink-0">
                    <User className="w-5 h-5 sm:w-5 sm:h-5 md:w-[22px] md:h-[22px] text-gray-300" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      {t.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {t.course}
                    </p>
                  </div>
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(236,72,153,0.25), transparent 70%)",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
