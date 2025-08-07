import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center px-4 my-12">
      <div className="bg-gray-200 border-2 border-white rounded-md shadow-lg w-full lg:w-[80%] py-10 px-6">
        <h1 className="mb-6 text-4xl font-bold text-center text-gray-800 lg:text-5xl">
          About <span className="text-red-600">D</span>igi
          <span className="text-red-600">K</span>art
        </h1>

        <p className="max-w-4xl mx-auto mb-6 text-lg leading-relaxed text-center text-gray-700">
          Welcome to <strong>DigiKart</strong>, your one-stop destination for
          high-quality electronics and digital products. Founded with the vision
          of making technology accessible and affordable, DigiKart brings you a
          carefully curated range of gadgets, accessories, and smart devices for
          your everyday needs.
        </p>

        <div className="flex flex-col items-center justify-between max-w-6xl gap-10 mx-auto mt-8 lg:flex-row">
          {/* Our Mission */}
          <div className="w-full p-6 bg-white rounded-md shadow-md lg:w-1/3">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              🚀 Our Mission
            </h2>
            <p className="text-gray-600">
              To empower every household with the latest digital products at
              unbeatable prices, ensuring trust, convenience, and speedy
              delivery.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="w-full p-6 bg-white rounded-md shadow-md lg:w-1/3">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              💡 Why Choose Us?
            </h2>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Wide range of digital gadgets & accessories</li>
              <li>Fast & reliable shipping across India</li>
              <li>Top-notch customer support</li>
              <li>Secure payment and return policy</li>
            </ul>
          </div>

          {/* Our Values */}
          <div className="w-full p-6 bg-white rounded-md shadow-md lg:w-1/3">
            <h2 className="mb-3 text-2xl font-semibold text-gray-800">
              🌱 Our Values
            </h2>
            <p className="text-gray-600">
              Integrity, innovation, and customer satisfaction drive everything
              we do. We believe in creating a seamless and joyful online
              shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
