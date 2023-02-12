import NetflixLogo from "../../assets/img/netflix-logo.png";

import { GoSearch } from "react-icons/go";
// import { useEffect, useState } from "react";
import {UseScrollY} from "../hooks";

function Navbar(props) {
  const [scrollY] = UseScrollY()

  return (
    <div
      className="w-full h-20 fixed top-0 navbar z-10"
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--primary-color)" }
      }
    >
      <div className="flex items-center justify-start h-full p-9">
        <div className="w-32  cursor-pointer">
          <img
            src={NetflixLogo}
            alt="Netflix"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-[var(--white-color)] pr-5 flex justify-end items-center">
          <GoSearch className="w-5 h-5 cursor-pointer text-[var(--text-color)] translate-x-8" />
          <input
            type="text"
            placeholder="Search video, movie..."
            className="text-sm border-2 border-solid boder-white outline-none w-0 p-2.5 cursor-pointer opacity-0 input-search"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
