import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import useUser from "../../hooks/useUser";


export default function Login() {

  const { authGitHub } = useUser();
  const [value, setValue] = useState("");

  function handleLogin(key) {
    key === "Enter" && authGitHub(value);
  }

  
  return (
    <div>
      <h1>Login</h1>
      <Link to="/perfil">Perfil</Link>
      <Link to="/">Home</Link>
      <input
        onKeyDown={(e) => handleLogin(e.key)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
      />
    </div>
  );
}
