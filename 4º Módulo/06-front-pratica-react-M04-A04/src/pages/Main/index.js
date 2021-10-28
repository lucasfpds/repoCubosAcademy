import React from "react";
import "./styles.css";
import { UserProvider } from "../../context/UserContext";
import Login from "../../components/Login/Login";
import Cadastrar from "../../components/Cadastrar/Cadastrar";
import Home from "../../components/Home/Home";
import useUser from "../../hooks/useUser";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function RotasProtegidas(props) {
  return (
    <Route
      render={() => (props.autenticado ? props.children : <Redirect to="/" />)}
    />
  );
}

function Main() {
  const { autenticado } = useUser();
  
  return (
    <div className="container-main">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastrar" component={Cadastrar} />
          <RotasProtegidas autenticado={(autenticado)}>
            <Route path="/home" component={Home} />
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
