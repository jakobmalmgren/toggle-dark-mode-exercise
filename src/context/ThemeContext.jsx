import { useState, createContext, useContext } from "react";
// sätter createcontext till themecontext
// const ThemeContext = createContext();
export const ThemeContext = createContext();

// hade kunnat exportera o in i loginform, o ej använda HOOKEN längst ner:
// export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  // context blir värdet som themecontext.providern skickas som props
  const context = useContext(ThemeContext);
  // samma som:
  // const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("context:", context);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
}
