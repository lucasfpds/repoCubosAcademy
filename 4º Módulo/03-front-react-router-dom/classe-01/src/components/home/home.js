import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Teste</p>
      <Link to="/perfil">Perfil</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
