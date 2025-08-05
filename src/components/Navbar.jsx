import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useContext, useState } from "react";
import { CartData } from "../Context/CartContext";

const Navbar = ({ location, getLocation }) => {
  const [dropdown, setdropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartval } = useContext(CartData);

  const ShowUp = () => {
    setdropdown(!dropdown);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50 flex items-center justify-between w-full p-4 bg-white shadow-2xl">
      {/* Left Section */}
      <div className="flex items-center gap-3 ml-4 sm:gap-6 md:gap-12 sm:ml-8">
        <Link to={"/"}>
          <div className="text-xl font-bold sm:text-2xl">
            <span className="text-red-600">D</span>igi
            <span className="text-red-600">K</span>art
          </div>
        </Link>

        {/* Location */}
        <div className="items-center hidden gap-1 text-sm sm:flex sm:text-base">
          <MapPin className="text-red-600" size={20} />
          <span className="font-semibold">
            {location.city && location.state ? (
              <div className="flex flex-col items-start">
                <div>{location.state}</div>
                <div>{location.city}</div>
              </div>
            ) : (
              "Add Address"
            )}
          </span>
          <FaCaretDown className="cursor-pointer" onClick={ShowUp} size={16} />
        </div>

        {/* Dropdown */}
        {dropdown && (
          <div className="absolute z-50 flex flex-col items-center justify-center w-56 h-32 gap-3 p-4 mt-64 ml-4 bg-white border shadow-lg rounded-xl sm:ml-60">
            <h2 className="text-lg font-bold">Detect Location</h2>
            <button
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
              onClick={() => {
                getLocation();
                ShowUp();
              }}
            >
              Detect my Location
            </button>
          </div>
        )}
      </div>

      {/* Hamburger menu icon */}
      <div className="mr-4 sm:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Right Section (desktop) */}
      <div className="items-center hidden gap-6 mr-8 sm:flex">
        <ul className="flex gap-4 text-sm font-semibold sm:text-lg">
          <NavLink to={"/"}>
            <li className="hover:text-red-600">Home</li>
          </NavLink>
          <NavLink to={"/products"}>
            <li className="hover:text-red-600">Products</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="hover:text-red-600">Contact</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li className="hover:text-red-600">About</li>
          </NavLink>
        </ul>

        {/* Cart Icon */}
        <Link to={"/cart"} className="relative">
          <IoCartOutline className="w-6 h-6" />
          <span className="absolute px-2 text-xs text-white bg-red-600 rounded-full -top-2 -right-2">
            {cartval.length}
          </span>
        </Link>

        {/* Sign In / User */}
        <SignedOut>
          <SignInButton className="bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 text-sm" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute left-0 z-40 flex flex-col w-full gap-4 px-6 py-4 bg-white border-t shadow-md top-16 sm:hidden">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            <NavLink to={"/"} onClick={toggleMenu}>
              <li>Home</li>
            </NavLink>
            <NavLink to={"/products"} onClick={toggleMenu}>
              <li>Products</li>
            </NavLink>
            <NavLink to={"/contact"} onClick={toggleMenu}>
              <li>Contact</li>
            </NavLink>
            <NavLink to={"/about"} onClick={toggleMenu}>
              <li>About</li>
            </NavLink>
          </ul>

          {/* Cart + Auth for mobile */}
          <div className="flex items-center justify-between">
            <Link to={"/cart"} onClick={toggleMenu} className="relative">
              <IoCartOutline className="w-6 h-6" />
              <span className="absolute px-2 text-xs text-white bg-red-600 rounded-full -top-2 -right-2">
                {cartval.length}
              </span>
            </Link>
            <div>
              <SignedOut>
                <SignInButton className="bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-4 py-2 rounded-md" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
