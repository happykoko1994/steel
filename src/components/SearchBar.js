import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6 flex items-center relative">
      <img
        src="/search.png"
        alt="Search"
        className="w-5 h-5 absolute"
      />
      <input
        type="text"
        placeholder="Введите запрос..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-2 pl-8 pr-4 font-manrope text-sm font-medium leading-6 text-left bg-transparent border-none focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchBar;


