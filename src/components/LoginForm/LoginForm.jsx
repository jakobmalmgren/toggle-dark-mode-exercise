import "./LoginForm.css";
import { useTheme } from "../../context/ThemeContext";

// jag hade egentligen bara kunnat imoprtera här o EJ använda HOOK:
// import {ThemeContext} from "./......"
// sen ta const  {theme, toggleTeam} = useContext(ThemeContext)
function LoginForm() {
  // tas in från hooken useTheme
  const { theme } = useTheme();

  return (
    <div className={`form form-${theme}`} data-testid="form-el">
      <input type="text" className="form__input" placeholder="Användarnamn" />
      <input type="text" className="form__input" placeholder="Lösenord" />
      <button className="form__button">Logga in</button>
    </div>
  );
}

export default LoginForm;
