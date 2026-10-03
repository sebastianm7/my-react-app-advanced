import { createContext, useState, useContext } from "react";
import CounterWithCustomHook from "./components/CounterWithCustomHook/CounterWithCustomHook";
import CounterWithReactMemo from "./components/CounterWithReactMemo/CounterWithReactMemo";
import "./App.css";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Cambiar tema
      </button>
    </div>
  );
};

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <CounterWithCustomHook />
      <CounterWithReactMemo />
    </>
  );
}

export default App;
