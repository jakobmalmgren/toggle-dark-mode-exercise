import "./App.css";

import { useTheme } from "./context/ThemeContext";

import ToggleTheme from "./components/ToggleTheme/ToggleTheme";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <ToggleTheme />
      <LoginForm />
    </div>
  );
}

export default App;
