import React, { useEffect, useRef } from "react";
import { timelineData } from "../../utils/Data";

const JourneySection = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const line = lineRef.current;
      if (!line) return;

      const section = line.parentElement;
      const rect = section.getBoundingClientRect();
      const progress =
        1 -
        (rect.bottom - window.innerHeight * 0.2) /
          (rect.height + window.innerHeight * 0.2);
      const clamped = Math.min(Math.max(progress, 0), 1);
      line.style.setProperty("--scroll-progress", clamped);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-white text-gray-800 py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-3xl md:text-4xl font-poppins font-semibold mb-4 text-gray-900"
            data-aos="fade-up"
          >
            Our <span className="text-pink-500">Journey</span>
          </h2>
          <p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            From an idea to a growing movement, ThinkPlus has been on an
            incredible path — creating meaningful learning experiences through
            mentorship and innovation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-linear-to-b from-pink-400 via-pink-300/50 to-transparent hidden md:block"></div>

          <div
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #ec4899 0%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black calc(var(--scroll-progress, 0) * 100%), transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black calc(var(--scroll-progress, 0) * 100%), transparent)",
            }}
          ></div>

          <div className="space-y-16 md:space-y-28">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                    {isLeft ? (
                      <>
                        <div className="flex justify-end">
                          <div
                            data-aos="fade-right"
                            className="relative bg-linear-to-br from-white to-gray-50 border border-gray-200/60 rounded-2xl shadow-sm p-8 w-full md:max-w-md transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                          >
                            <div
                              className="absolute top-0 left-0 w-full h-1 rounded-t-full"
                              style={{
                                background:
                                  "linear-gradient(90deg, #EC4899, transparent)",
                              }}
                            ></div>

                            <div className="text-right">
                              <span className="font-semibold text-lg mb-2 text-primary">
                                {item.year}
                              </span>
                              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-base">
                                {item.description}
                              </p>
                            </div>

                            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full blur-[100px] opacity-20 bg-primary/30"></div>
                          </div>
                        </div>
                        <div></div>
                      </>
                    ) : (
                      <>
                        <div></div>

                        <div className="flex justify-start">
                          <div
                            data-aos="fade-left"
                            className="relative bg-linear-to-br from-white to-gray-50 border border-gray-200/60 rounded-2xl shadow-sm p-8 w-full md:max-w-md transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                          >
                            <div
                              className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                              style={{
                                background:
                                  "linear-gradient(90deg, #8B5CF6, transparent)",
                              }}
                            ></div>

                            <div className="text-left">
                              <span className="font-semibold text-lg mb-2 text-secondary">
                                {item.year}
                              </span>
                              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                                {item.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed text-base">
                                {item.description}
                              </p>
                            </div>

                            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[100px] opacity-20 bg-secondary/30"></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div
                      data-aos="fade-up"
                      className={`relative bg-linear-to-br from-white to-gray-50 border border-gray-200/60 rounded-2xl shadow-sm p-8 w-full transition-all duration-300 ${
                        index % 2 === 0
                          ? "hover:border-pink-300"
                          : "hover:border-violet-300"
                      }`}
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
                        style={{
                          background: `linear-gradient(90deg, ${
                            index % 2 === 0 ? "#EC4899" : "#8B5CF6"
                          }, transparent)`,
                        }}
                      ></div>

                      <div className="text-left">
                        <span
                          className={`font-semibold text-lg mb-2 ${
                            index % 2 === 0 ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base">
                          {item.description}
                        </p>
                      </div>

                      <div
                        className={`absolute -bottom-10 ${
                          index % 2 === 0 ? "-left-10" : "-right-10"
                        } w-32 h-32 rounded-full blur-[100px] opacity-20 ${
                          index % 2 === 0 ? "bg-primary/30" : "bg-secondary/30"
                        }`}
                      ></div>
                    </div>
                  </div>
                  <div
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary border-4 border-white rounded-full shadow-md hidden md:block"
                    data-aos="zoom-in"
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
