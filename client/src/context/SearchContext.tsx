import { createContext } from "react";
import { SearchContextType } from "../providers/SearchContextProvider";

export const SearchContext = createContext<SearchContextType | undefined>(undefined);
