import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router";

function NavBar() {
  const location = useLocation();
  const slug = location.pathname.split('/details/')

  console.log("NavBar params:",  slug[1] , location.pathname );

  const getPageInfo = () => {
    switch (true) {
      case location.pathname === "/":
        return { title: "About", to: "/about" };
      case location.pathname === "/about":
        return { title: "Collections", to: "/collections" };
      case location.pathname === `/details/${slug[1]}`:
        return { title: "About", to: "/about" };
      case location.pathname === "/collections":
        return { title: "About", to: "/about" };
      default:
        return { title: "Home", to: "/" };
    }
  };

  const { title, to } = getPageInfo();
  return (
    <div
      className={`nav-wrapper fixed font-main font-thin top-0 left-0 w-full py-[3rem] px-[2rem] flex justify-between z-50 items-center ${
        title === "Collections" ? "text-black brightness-0" : "text-white"
      }`}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="w-[9rem]" />
      </Link>
      <Link
        className="text-[1.5rem] tracking-wider"
        to={to}
      >
        {title}
      </Link>
    </div>
  );
}

export default NavBar;
