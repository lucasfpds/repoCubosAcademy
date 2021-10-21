import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";
import { useParams } from "react-router";
import useUser from "../../hooks/useUser";

export default function Perfil() {
  const { perfil } = useParams();
  const { dataUser } = useUser();

  return (
    <>
      <div>
        <h1>Perfil</h1>
        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
        <p>{dataUser}</p>
      </div>
      <div>
        <Route path="/:perfil">
          <InfoPerfil />
        </Route>
      </div>
    </>
  );
}

function InfoPerfil() {
  return (
    <div>
      <h3>Perfil: lucas</h3>
    </div>
  );
}
