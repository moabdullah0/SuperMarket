import { createContext, useContext } from "react";

interface LangContextType {
  mode: "Arabic" | "Eng";
  toggleMode: () => void;
}

const defaultState: LangContextType = {
  mode: "Eng",
  toggleMode: () => {},
};

export const LangContext = createContext<LangContextType>(defaultState);

export const useGlobalContext = () => useContext(LangContext);
