/* eslint-disable jsx-a11y/anchor-is-valid */
const menuItems = ["Home", "TV Shows", "Movies", "Latest", "My List"];

function Menu() {
  return (
    <div className="">
      <ul className="flex text-[#e5e5e5]">
        {menuItems.map((item, index) => (
          <li key={index} className="text-[14px] hover:text-[var(--white-color)] font-normal cursor-pointer menu-items transition">
            <a href="#" className="ml-5 flex items-center h-full relative hover:text-[#b3b3b3] transition-colors">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
