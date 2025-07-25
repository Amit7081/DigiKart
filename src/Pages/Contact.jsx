import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-[#0f2027] text-white">
      <div className=" flex  items-center gap-20 flex-col bg-gradient-to-r from-[#7c7f9a] to-[#7d6f8a] border-2 border-gray-700 rounded-lg shadow-xl h-[500px] lg:h-[800px] w-[80%] my-20">
        <h1 className="mt-10 text-5xl font-bold">
          Get in Touch with <span className="text-red-600 ">D</span>igi
          <span className="text-red-600">K</span>art
        </h1>

        <div className="flex items-center justify-around w-full gap-6">
          <div className="flex flex-col items-center justify-center gap-4 text-left text-wrap w-96">
            <h1 className="text-3xl font-bold">Contact Info</h1>
            {/* Address Info */}

            <p className="font-serif text-lg text-gray-300">
              Have a question or need support? We're here to help you with your
              electronics journey.
            </p>
            <p>
              Address: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, minima!
            </p>
            <p>
              Email: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, minima!
            </p>
            <p>
              Phone: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, minima!
            </p>
          </div>

          {/* Contact Form */}
          <div>Contact form</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
