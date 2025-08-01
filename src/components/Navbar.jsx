import { Link, NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
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
  const ShowUp = () => {
    setdropdown(!dropdown);
  };
  const { cartval } = useContext(CartData);

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-2xl w-[100%]">
      {/* Left Navbar */}
      <div className="flex items-center justify-center gap-12 ml-16 ">
        <Link to={"/"}>
          <div className="text-2xl font-bold">
            <span className="text-red-600 ">D</span>igi
            <span className="text-red-600">K</span>art
          </div>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          <MapPin className="text-red-600" />
          <span className="font-semibold">
            {location.city && location.state ? (
              <div className="flex flex-col items-center justify-center font-semibold">
                <div>{location.state}</div>
                <div> {location.city}</div>
              </div>
            ) : (
              "Add Address"
            )}
          </span>
          <FaCaretDown className="cursor-pointer" onClick={ShowUp} />
        </div>

        {dropdown ? (
          <div className="fixed z-10 flex flex-col items-center justify-center w-64 h-32 gap-3 ml-40 transition-transform duration-300 bg-white border-2 border-white shadow-md mt-52 hover:scale-105 rounded-2xl">
            <h2 className="text-lg font-bold">Detect Location</h2>
            <button
              className="px-4 py-2 text-white transition-colors duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
              onClick={() => {
                getLocation();
                ShowUp();
              }}
            >
              Detect my Location
            </button>
          </div>
        ) : null}
      </div>
      {/* Right Navbar */}
      <div className="flex items-center gap-7 mr-36">
        <ul className="flex items-center justify-center gap-4 text-xl font-semibold">
          <NavLink to={"/"}>
            {" "}
            <li>Home</li>{" "}
          </NavLink>
          <NavLink to={"/products"}>
            <li>Products</li>{" "}
          </NavLink>
          <NavLink to={"/contact"}>
            {" "}
            <li>Contact</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>{" "}
          </NavLink>
        </ul>
        <Link to={"/cart"} className="relative">
          <IoCartOutline className="h-7 w-7" />
          <span className="absolute px-2 text-white bg-red-600 rounded-full -top-3 -right-3">
            {cartval.length}
          </span>
        </Link>
        <div>
          <SignedOut>
            <SignInButton className="bg-gradient-to-r from-[#0f2027] to-[#764ba2] text-white px-6 py-3 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl capitalize" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
