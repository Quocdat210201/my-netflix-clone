/* eslint-disable jsx-a11y/anchor-is-valid */
import NetflixLogo from "../../assets/img/netflix-logo.png";

// import { useEffect, useState } from "react";
import { UseScrollY } from "../hooks";
import Search from "./Search";
import Menu from "./Menu";
import Action from "./Action";

function Navbar(props) {
  const [scrollY] = UseScrollY();

  return (
    <div
      className="w-full fixed top-0 navbar z-10"
      style={
        scrollY < 50
          ? {
              backgroundImage:
                "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
            }
          : { backgroundColor: "var(--primary-color)" }
      }
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center justify-start h-full">
          <div className="w-32  cursor-pointer">
            <a href="#">
              <img
                src={NetflixLogo}
                alt="Netflix"
                className="w-24 h-8 object-contain mr-6"
              />
            </a>
          </div>
          <Menu />
        </div>
        <div className="flex items-center">
          <Search />
          <Action />
        </div>
        {/* <div className="text-[var(--white-color)] pr-5 flex justify-end items-center">
          <GoSearch className="w-5 h-5 cursor-pointer text-[var(--text-color)] translate-x-8" />
          <input
            type="text"
            placeholder="Search video, movie..."
            className="text-sm border-2 border-solid boder-white outline-none w-0 p-2.5 cursor-pointer opacity-0 input-search"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
