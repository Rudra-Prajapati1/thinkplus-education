import React from "react";
import { ArrowRight, Sparkles, Target, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-secondary text-white overflow-hidden">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0"
        >
          <defs>
            <pattern
              id="dotPattern"
              x="0"
              y="0"
              width="30"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/40 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles size={16} className="text-pink-400" />
              <span className="text-sm font-medium text-pink-300">
                India's Premier Exam Prep Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              <span className="block mb-2">Think Beyond.</span>
              <span className="block bg-linear-to-r from-pink-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Master{" "}
              <span className="font-semibold text-white">CAT, IPMAT, CLAT</span>{" "}
              and more with mentorship from IIM graduates. Transform your
              potential into success.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Target className="text-pink-400 mb-2" size={24} />
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-gray-400">Students</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Award className="text-violet-400 mb-2" size={24} />
                <p className="text-2xl font-bold">95%</p>
                <p className="text-xs text-gray-400">Success Rate</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Sparkles className="text-pink-400 mb-2" size={24} />
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs text-gray-400">Top Mentors</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/about"
                className="group flex items-center gap-2 bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50"
              >
                Start Your Journey
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/contact"
                className="flex items-center gap-2 bg-white/5 border border-white/20 hover:border-pink-500/50 hover:bg-white/10 text-white px-6 py-3.5 rounded-xl font-medium transition-all duration-300"
              >
                Talk to Expert
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div data-aos="fade-left" data-aos-delay="200" className="relative">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl"></div>

            <div
              className="relative overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl shadow-pink-500/20"
              style={{
                clipPath: "polygon(0 8%, 100% 0, 100% 92%, 0 100%)",
              }}
            >
              <img
                src="/assets/hero1.png"
                alt="ThinkPlus Education"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A0B25] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Course Tags */}
            <div className="absolute top-8 -left-4 bg-white text-gray-900 px-4 py-2 rounded-full shadow-xl font-semibold text-sm float-anim">
              🎯 CAT 2025
            </div>
            <div className="absolute top-32 -right-4 bg-linear-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full shadow-xl font-semibold text-sm float-anim [animation-delay:1s]">
              ⚡ IPMAT Prep
            </div>
            <div className="absolute bottom-24 -left-6 bg-white text-gray-900 px-4 py-2 rounded-full shadow-xl font-semibold text-sm float-anim [animation-delay:2s]">
              📚 CLAT Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
