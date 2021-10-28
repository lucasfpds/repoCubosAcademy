import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import img from "../../assets/ImagemEsquerda.png";
import useStyle from "./Style";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../Toast/Toast";

export default function Login() {
  const history = useHistory();
  const classes = useStyle();
  const {
    autenticado,
    msg,
    toast,
    setToast,
    setToken,
    setAutenticado,
    setMsg,
  } = useUser();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  async function handleLogin() {
    try {
      const body = {
        email,
        senha,
      };
      const response = await fetch(
        "https://cubos-api-contacts.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        setAutenticado(true);
        setToken(data.token);
      } else {
        setMsg(data);
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 5000);
      }
    } catch (error) {
      console.log("error");
    }
  }

  useEffect(() => {
    autenticado ? history.push("/home") : history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.login}>
      <div className={classes.divImg}>
        <img src={img} className={classes.img} alt="Imagem Iphone" />
      </div>
      <div className={classes.divInfos}>
        <div className={classes.form}>
          <p>Bem vindo</p>
          <h1>Faça o login com sua conta</h1>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            onChange={(e) => setSenha(e.target.value)}
            label="Senha"
            variant="outlined"
          />
          <Link onClick={handleLogin} to="/home">
            <Button className={classes.btnLogin} variant="contained">
              Perfil
            </Button>
          </Link>
        </div>
        <p>
          Não tem cadastro?&nbsp;
          <Link to="/cadastrar" underline="hover" href="/">
            Clique aqui!
          </Link>
        </p>
      </div>
      {toast && <Toast msg={msg} />}
    </div>
  );
}
