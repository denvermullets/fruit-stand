import { ReactNode } from "react";
import { useNavigate } from "@tanstack/react-router";
import { FruitsSearchParams } from "../models/fruit.model";
import { SearchContext } from "../context/SearchContext";

export type SearchContextType = {
  updateSearch: (param: keyof FruitsSearchParams, value: string | boolean | undefined) => void;
  clearSearch: (param: keyof FruitsSearchParams) => void;
  resetAllSearches: () => void;
};

const SearchProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const updateSearch = (param: keyof FruitsSearchParams, value: string | boolean | undefined) => {
    // remove '' as a valid param
    const cleanValue = typeof value === "string" ? value.trim() || undefined : value;

    navigate({
      to: "/",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        [param]: cleanValue,
      }),
    });
  };

  const clearSearch = (param: keyof FruitsSearchParams) => {
    navigate({
      to: "/",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        [param]: undefined,
      }),
    });
  };

  const resetAllSearches = () => {
    navigate({
      to: "/",
      search: {} as Record<string, unknown>,
    });
  };

  return (
    <SearchContext.Provider value={{ updateSearch, clearSearch, resetAllSearches }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
