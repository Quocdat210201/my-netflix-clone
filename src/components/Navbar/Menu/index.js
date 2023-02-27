import { Link } from "react-router-dom";
import routerConfig from "../../../config";

/* eslint-disable jsx-a11y/anchor-is-valid */
// const menuItems = ["Home", "TV Shows", "Movies", "Latest", "My List"];

function Menu() {
  return (
    <div className="">
      <ul className="flex text-[#e5e5e5]">
        <li className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
          <Link to={routerConfig.home} className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">Home</Link>
        </li>
        <li className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
          <Link to={routerConfig.tvShow} className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">TV Shows</Link>
        </li>
        <li className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
          <Link to={routerConfig.movies} className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">Movies</Link>
        </li>
        <li className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
          <Link to={routerConfig.latest} className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">Latest</Link>
        </li>
        <li className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
          <Link to={routerConfig.myList} className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">My List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
