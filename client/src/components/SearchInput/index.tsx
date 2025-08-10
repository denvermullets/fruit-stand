import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { SearchIcon } from "../shared/icons";

interface SearchInputProps {
  placeholder?: string;
  searchParam: "name";
  currentValue?: string;
}

const SearchInput = ({
  placeholder = "Search",
  searchParam,
  currentValue = "",
}: SearchInputProps) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(currentValue);

  useEffect(() => {
    // if url changes update value
    setInputValue(currentValue);
  }, [currentValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSearch();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      updateSearch();
    }
  };

  const updateSearch = () => {
    navigate({
      to: "/",
      search: (prev) => ({
        ...prev,
        [searchParam]: inputValue.trim() || undefined,
      }),
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon color={"#6B6E8B"} x={15} y={15} />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="w-full pl-12 pr-16 py-3 bg-mocha-bg border border-stroke-dark rounded-xl text-fruit-orange placeholder-fruit-text focus:outline-none focus:ring-2 focus:ring-fruit-orange focus:border-transparent transition-all duration-200"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
