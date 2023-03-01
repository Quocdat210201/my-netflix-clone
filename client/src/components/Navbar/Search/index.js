import { GoSearch } from "react-icons/go";

function Search({onchange}) {
  return (
    <div className="text-[var(--white-color)] flex justify-end items-center">
      <input
        type="text"
        placeholder="Search video, movie..."
        className="text-sm border-2 border-solid boder-white outline-none w-0 p-2.5 cursor-pointer opacity-0 input-search"
        onChange={onchange}
      />
      <GoSearch className="w-5 h-5 cursor-pointer text-[var(--white-color)] search-icon" />
    </div>
  );
}

export default Search;
