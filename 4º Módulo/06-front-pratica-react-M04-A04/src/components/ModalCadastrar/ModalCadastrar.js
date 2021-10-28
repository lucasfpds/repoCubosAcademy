import Button from "@mui/material/Button";
import useStyle from "./Style";
import TableRow from "../TableRow/TableRow";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react/cjs/react.development";
import { TextField } from "@mui/material";
import useUser from "../../hooks/useUser";
import Toast from "../Toast/Toast";

export default function ModalCadastrar(values) {
  const classes = useStyle();

  const { msg, toast, setToast, setToken, setAutenticado, setMsg, token } =
    useUser();

  const { setOpen, open } = values;

  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();
  const [nome, setNome] = useState();

  const handleClose = () => setOpen(false);

  async function handleRegister() {
    try {
      const body = {
        nome,
        telefone,
        email,
      };

      const response = await fetch(
        "https://cubos-api-contacts.herokuapp.com/contatos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(body),
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        handleClose();
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
      console.log(error);
    }
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.root}>
          <Typography
            id="modal-modal-title"
            align="center"
            variant="h2"
            component="h3"
          >
            Novo Contato
          </Typography>
          <TextField
            className={classes.input}
            onChange={(e) => setNome(e.target.value)}
            label="Nome"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            variant="outlined"
          />
          <TextField
            className={classes.input}
            onChange={(e) => setTelefone(e.target.value)}
            label="Telefone"
            variant="outlined"
          />
          <Button
            onClick={handleRegister}
            className={classes.cadastrar}
            variant="contained"
          >
            Cadastrar
          </Button>
          <Button
            onClick={handleClose}
            className={classes.btnCancel}
            variant="contained"
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
      {toast && <Toast msg={msg} />}
    </>
  );
}
