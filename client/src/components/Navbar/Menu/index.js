import { Link, NavLink } from "react-router-dom";
import routerConfig from "../../../config";

/* eslint-disable jsx-a11y/anchor-is-valid */
// const menuItems = ["Home", "TV Shows", "Movies", "Latest", "My List"];

function Menu() {
  return (
    <div className="">
      <ul className="flex text-[#e5e5e5]">
        <li className="text-[14px] font-normal cursor-pointer menu-items transition">
          <NavLink
            to={routerConfig.home}
            className={`${({ isActive }) => (isActive ? "active" : null)} ml-5 flex items-center h-full relative text-[#b3b3b3] transition-colors`}
          >
            Home
          </NavLink>
        </li>
        <li className="text-[14px] font-normal cursor-pointer menu-items transition">
          <NavLink
            to={routerConfig.tvShow}
            className={`${({ isActive }) => (isActive ? "active" : null)} ml-5 flex items-center h-full relative text-[#b3b3b3] transition-colors`}
          >
            TV Show
          </NavLink>
        </li>
        <li className="text-[14px] font-normal cursor-pointer menu-items transition">
          <NavLink
            to={routerConfig.movies}
            className={`${({ isActive }) => (isActive ? "active" : null)} ml-5 flex items-center h-full relative text-[#b3b3b3] transition-colors`}
          >
            Movies
          </NavLink>
        </li>
        <li className="text-[14px] font-normal cursor-pointer menu-items transition">
          <NavLink
            to={routerConfig.latest}
            className={`${({ isActive }) => (isActive ? "active" : null)} ml-5 flex items-center h-full relative text-[#b3b3b3] transition-colors`}
          >
            Latest
          </NavLink>
        </li>
        <li className="text-[14px] font-normal cursor-pointer menu-items transition">
          <NavLink
            to={routerConfig.myList}
            className={`${({ isActive }) => (isActive ? "active" : null)} ml-5 flex items-center h-full relative text-[#b3b3b3] transition-colors`}
          >
            My List
          </NavLink>
        </li>
      </ul>
    </div >
  );
}

export default Menu;
