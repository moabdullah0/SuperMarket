import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useEffect, useState } from "react";
import { LangContext } from "./context/language";

function App() {
  const [mode, setMode] = useState<"Eng" | "Arabic">(localStorage.getItem('langMode') as "Eng" | "Arabic" || "Eng");
  useEffect(() => {
    localStorage.setItem('langMode', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "Eng" ? "Arabic" : "Eng";
      localStorage.setItem('langMode', newMode); 
      return newMode;
    });
  };
  return (
    <LangContext.Provider value={{ mode,  toggleMode }}>
      <div className=" " dir={mode == "Eng" ? "ltr" : "rtl"}>
        <RouterProvider router={router} />
      </div>
    </LangContext.Provider>
  );
}

export default App;
