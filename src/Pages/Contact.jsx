import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-[#0f2027] text-white">
      <div className="flex items-center gap-10 lg:gap-20 flex-col bg-gradient-to-r from-[#7c7f9a] to-[#7d6f8a] border-2 border-gray-700 rounded-lg shadow-xl h-auto w-[90%] lg:w-[80%] my-20 py-10 px-6">
        <h1 className="text-4xl font-bold text-center lg:text-5xl">
          Get in Touch with <span className="text-red-600">D</span>igi
          <span className="text-red-600">K</span>art
        </h1>

        <div className="flex flex-col items-center justify-around w-full gap-10 lg:flex-row">
          {/* Contact Info Section */}
          <div className="flex flex-col items-start w-full gap-5 lg:w-1/2">
            <h2 className="text-2xl font-bold">📞 Contact Info</h2>
            <p className="font-serif text-gray-300">
              Have questions or need help with your order? We're here to assist
              you on your DigiKart journey.
            </p>
            <p>
              <strong>Address:</strong> DigiKart HQ, 2nd Floor, Tech Park
              Avenue, Bengaluru, India
            </p>
            <p>
              <strong>Email:</strong> support@digikart.in
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="w-full p-6 text-gray-800 bg-white rounded-lg shadow-md lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-center">
              📬 Send Us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-2 font-semibold text-white transition-all bg-red-600 rounded hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
