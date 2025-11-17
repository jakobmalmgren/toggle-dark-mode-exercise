import "./ToggleTheme.css";
import { useTheme } from "../../context/ThemeContext";

function ToggleTheme() {
  const { toggleTheme } = useTheme();

  return (
    <section className="toggle-theme">
      <div className="fig"></div>
      <input type="checkbox" id="toggle" onChange={toggleTheme} />
      <label htmlFor="toggle" className="toggle-button"></label>
    </section>
  );
}

export default ToggleTheme;
