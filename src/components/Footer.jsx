import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 text-gray-200 bg-[rgb(16,38,48)]">
      <div className="flex flex-col gap-8 px-4 mx-auto max-w-7xl md:flex-row md:justify-between">
        {/* Info */}
        <div className="flex-1">
          <Link to="/">
            <div className="text-2xl font-bold">
              <span className="text-red-600">D</span>igi
              <span className="text-red-600">K</span>art
            </div>
          </Link>
          <p className="mt-2 text-sm">
            Powering Your World with the Best in Electronics.
          </p>
          <p className="mt-2 text-sm">
            123 Electronics St, Style City, NY 10001
          </p>
          <p className="text-sm">Email: support@Zaptro.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>

        {/* Customer Service */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQs</li>
            <li>Order Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex mt-2 space-x-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways, and more
          </p>
          <form className="flex flex-col gap-2 mt-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-2 text-gray-600 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-600 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom section */}
      <div className="pt-6 mt-8 text-sm text-center border-t border-gray-700">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-500">DigiKart</span>. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
