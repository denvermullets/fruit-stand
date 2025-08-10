import { SearchIcon } from "../shared/icons";

const SearchInput = () => {
  return (
    <div className="w-full max-w-2xl mx-auto ">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <SearchIcon color={"#6B6E8B"} x={15} y={15} />
        </div>

        <input
          type="text"
          placeholder="Search"
          className="w-full pl-12 pr-16 py-3 bg-mocha-bg border border-stroke-dark rounded-xl text-fruit-orange placeholder-fruit-text focus:outline-none focus:ring-2 focus:ring-fruit-orange focus:border-transparent transition-all duration-200"
        />

        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <div className="inline-flex items-center px-2 py-1 bg-mocha-bg border border-stroke-dark rounded-md text-xs text-fruit-text font-medium">
            ⌘K
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
