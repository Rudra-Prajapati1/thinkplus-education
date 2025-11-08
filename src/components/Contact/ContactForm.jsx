import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting ThinkPlus! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 border border-gray-200"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 text-center text-pink-500">
        Send us a Message
      </h3>

      <div className="mb-4 sm:mb-5">
        <label
          htmlFor="name"
          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 
                     focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition"
        />
      </div>

      <div className="mb-4 sm:mb-5">
        <label
          htmlFor="email"
          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 
                     focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition"
        />
      </div>

      <div className="mb-4 sm:mb-5">
        <label
          htmlFor="phone"
          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700"
        >
          Phone No
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 
                     focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition"
        />
      </div>

      <div className="mb-4 sm:mb-5">
        <label
          htmlFor="course"
          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700"
        >
          Course
        </label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 
                     focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition"
        >
          <option value="">Select Course</option>
          <option value="CAT">CAT</option>
          <option value="IPMAT">IPMAT</option>
          <option value="CLAT">CLAT</option>
          <option value="IQ+">IQ+</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4 sm:mb-5">
        <label
          htmlFor="message"
          className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Type your message here..."
          className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-50 border border-gray-300 text-sm sm:text-base text-gray-800 placeholder-gray-400 
                     focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-2.5 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white text-sm sm:text-base rounded-lg font-semibold transition shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
