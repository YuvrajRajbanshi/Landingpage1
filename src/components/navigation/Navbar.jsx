import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../public/photos/logo.png";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between md:px-24   p-4  ">
          <div>
            <nav className="flex items-center gap-4">
              <Link to="/">
                <img src={logo} alt="logo" className="w-10" />
              </Link>
              <NavLink to="/" className="hidden md:block">
                Home
              </NavLink>
              <NavLink to="/" className="hidden md:block">
                Certificate
              </NavLink>
              <NavLink to="/" className="hidden md:block">
                Pricing
              </NavLink>
            </nav>
          </div>
          <div>
            <nav className="flex items-center gap-4">
              <div>
                <NavLink
                  to="/"
                  className="mr-4  bg-white text-black px-2 py-1 rounded-sm font-semibold"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/"
                  className="bg-blue-700 px-2 py-1 rounded-md cursor-pointer "
                >
                  Get Started
                </NavLink>
              </div>
              <div className="md:hidden">
                {isMenuOpen ? (
                  <RxCross1 className="cursor-pointer" onClick={toggle} />
                ) : (
                  <GiHamburgerMenu
                    className="cursor-pointer"
                    onClick={toggle}
                  />
                )}
              </div>
            </nav>
          </div>

          {/* for small screen */}
        </div>
        {isMenuOpen ? (
          <div className="flex items-center justify-between mx-5  p-4 md:hidden">
            <div className=" mx-auto ">
              <nav className="flex  gap-4 flex-col ">
                <NavLink to="/" className="">
                  Home
                </NavLink>
                <NavLink to="/" className="">
                  Certificate
                </NavLink>
                <NavLink to="/" className="">
                  Pricing
                </NavLink>
              </nav>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Navbar;
