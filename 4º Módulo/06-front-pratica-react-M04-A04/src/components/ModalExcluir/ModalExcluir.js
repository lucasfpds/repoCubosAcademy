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
import { useEffect } from "react";

export default function ModalExcluir(values) {
  const classes = useStyle();

  const {
    obterContatos,
    toast,
    setToast,
    setToken,
    setAutenticado,
    setMsg,
    token,
  } = useUser();

  const { setOpen, open, id, nome } = values;

  const handleClose = () => setOpen(false);

  async function handleDelete() {
    try {
      const response = await fetch(
        `https://cubos-api-contacts.herokuapp.com/contatos/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      obterContatos();
      // if (response.status === 200) {
      //   handleClose();
      //   setAutenticado(true);
      //   setToken(data.token);
      // } else {
      //   setMsg(data);
      //   setToast(true);
      //   setTimeout(() => {
      //     setToast(false);
      //   }, 5000);
      // }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {}, []);
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
            Confirma a exclusão?
          </Typography>
          <Typography id="modal-modal-title" align="center" variant="h6">
            Deseja excluir o contato, {nome}?
          </Typography>
          <Button
            onClick={handleDelete}
            className={classes.cadastrar}
            variant="contained"
          >
            Excluir
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
    </>
  );
}
