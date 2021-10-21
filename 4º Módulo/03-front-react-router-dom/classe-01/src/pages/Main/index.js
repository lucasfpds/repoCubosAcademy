import React from "react";
import "./styles.css";
import { UserProvider } from "../../context/UserContext";
import Home from "../../components/home/home";
import Login from "../../components/login/login";
import Perfil from "../../components/perfil/perfil";
import useUser from "../../hooks/useUser";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

function RotasProtegidas(props) {
  return (
    <Route
      render={() =>
        props.autenticado ? props.children : <Redirect to="/login" />
      }
    />
  );
}

function Main() {
  const { autenticado } = useUser();
  return (
    <div className="container-main">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <RotasProtegidas autenticado={autenticado}>
            <Route path="/perfil" component={Perfil} />
          </RotasProtegidas>
        </Switch>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
