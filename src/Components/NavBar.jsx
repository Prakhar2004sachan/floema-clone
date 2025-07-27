import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router";

function NavBar() {
  const location = useLocation();
  const getPageInfo = () => {
    switch (location.pathname) {
      case "/":
        return { title: "About", to: "/about" };
      case "/about":
        return { title: "Collections", to: "/collections" };
      case "/details":
        return { title: "About", to: "/" };
      case "/collections":
        return { title: "About", to: "/about" };
      default:
        return { title: "Home", to: "/" };
    }
  };

  const { title, to } = getPageInfo();
  return (
    <div
      className={`fixed top-0 left-0 w-full py-[3rem] px-[2rem] flex justify-between z-50 items-center ${
        title === "Collections" ? "text-black brightness-0" : "text-white"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-[9rem]" />
      </Link>
      <Link
        className="font-main font-[600] text-[1.5rem] tracking-wider"
        to={to}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBar;
