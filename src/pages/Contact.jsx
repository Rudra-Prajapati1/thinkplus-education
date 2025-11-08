import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <section className="relative w-full bg-white text-gray-800 py-6 sm:py-8 md:py-10 mb-12 sm:mb-16 md:mb-18 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-poppins font-semibold text-primary mb-3 sm:mb-4 px-4"
            data-aos="fade-up"
          >
            Get in Touch
          </h2>
          <p
            className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Have any questions or want to know more about our programs? We'd
            love to hear from you — our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          <div
            className="flex flex-col gap-5 sm:gap-6 md:gap-8"
            data-aos="fade-right"
          >
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-full bg-pink-100 text-pink-600 shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">
                  Our Office
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-full bg-pink-100 text-pink-600 shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Email</h4>
                <p className="text-sm sm:text-base text-gray-600 break-all">
                  support@thinkpluseducation.com
                </p>
              </div>
            </div>

            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-full bg-pink-100 text-pink-600 shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-base sm:text-lg">Phone</h4>
                <p className="text-sm sm:text-base text-gray-600">
                  +91 9581400055
                </p>
              </div>
            </div>

            <div
              className="rounded-lg sm:rounded-xl overflow-hidden shadow-md mt-2 sm:mt-4 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              data-aos="fade-up"
            >
              <iframe
                title="ThinkPlus Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.236447646412!2d72.57136231496076!3d23.03957498494102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e2b5ad9f6f%3A0xbaf0125a3bb0ed63!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703252385040!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div data-aos="fade-left">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
