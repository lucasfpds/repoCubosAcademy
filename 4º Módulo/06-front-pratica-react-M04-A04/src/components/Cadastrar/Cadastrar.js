import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import img from "../../assets/ImagemDireita.jpg";
import useStyle from "./Style";

import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../Toast/Toast";

export default function Cadastrar() {
  const history = useHistory();
  const classes = useStyle();
  const { autenticado, setAutenticado, setToken, hidden, setHidden } = useUser();
  const [email, setEmail]= useState();
  const [senha, setSenha]= useState();
  const [nome, setNome]= useState();
  const [msg, setMsg]= useState();
  const [toast, setToast] = useState(false);
  const [cadastrado, setCadastrado]= useState(false);

  async function handleRegister() {
    try {
      
    const body = {
      nome,
      email,
      senha,
    };
    
    const response = await fetch(
      "https://cubos-api-contacts.herokuapp.com/usuarios",
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
      setCadastrado(true);
    } else {
      
      if(data === 'O campo nome é obrigatório'){
        setMsg(data)
      } else if(data === 'O campo email é obrigatório'){
        setMsg(data)
      } else if(data === 'O campo senha é obrigatório'){
        setMsg(data)
      } else if(data === 'O email já existe'){
        setMsg(data)
      } 
      setToast(true)
      setTimeout(() => {
        setToast(false);
      }, 5000);
    }
    } catch (error) {
      console.log(error);
    }
  }
  if(cadastrado) autenticado ? history.push("/home") : history.push("/");


  return (
    <div className={classes.cadastrar}>
      <div className={classes.divImg}>
        <img src={img} className={classes.img} alt="Imagem Agenda" />
      </div>
      <div className={classes.divInfos}>
        <div className={classes.form}>
          <h1>Cadastre-se</h1>
          <TextField  onChange={e=>setNome(e.target.value)} label="Nome" variant="outlined" />
          <TextField  onChange={e=>setEmail(e.target.value)} label="Email" variant="outlined" />
          <TextField  type='password' onChange={e=>setSenha(e.target.value)} label="Senha" variant="outlined" />
          <Button onClick={handleRegister} className={classes.btnLogin} variant="contained">
            Cadastrar
          </Button>
          <Link className={classes.linkCancel} to="/" underline="hover" href="/">
          <Button className={classes.btnCancel} variant="contained">
            Cancelar
          </Button>
          </Link>
        </div>
        <p>
          Já tem cadastro?&nbsp;
          <Link to="/" underline="hover" href="/">
            Clique aqui!
          </Link>
        </p>
      </div>
      {toast && <Toast msg={msg}/>}
    </div>
  );
}
