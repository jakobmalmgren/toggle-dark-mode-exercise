import "./LoginForm.css";
import { useTheme } from "../../context/ThemeContext";

function LoginForm() {
  const { theme } = useTheme();

  return (
    <div className={`form form-${theme}`}>
      <input type="text" className="form__input" placeholder="Användarnamn" />
      <input type="text" className="form__input" placeholder="Lösenord" />
      <button className="form__button">Logga in</button>
    </div>
  );
}

export default LoginForm;
