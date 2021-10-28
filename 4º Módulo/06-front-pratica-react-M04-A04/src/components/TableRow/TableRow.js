import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useStyle from "./Style";
import IconPencil from "../../assets/Icon-Pencil.png";
import IconTrash from "../../assets/Icon-Trash.png";
import useUser from "../../hooks/useUser";
import ModalExcluir from "../ModalExcluir/ModalExcluir";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TableRow(value) {
  const classes = useStyle();
  
  const {e} = value;
  
  const { contatos} = useUser();
  const [open, setOpen] = React.useState(false);
  const [modalExcluir, setModalExcluir] = React.useState(true);
  const handleOpen = () => setOpen(true);
  
  console.log(e.id);
  return (
    <div>
      <div className={classes.row}>
        <p className={classes.rowItem}>{e.nome}</p>
        <p className={classes.rowItem}>{e.email}</p>
        <p className={classes.rowItem}>{e.telefone}</p>
        <div className={classes.rowIcons}>
          <Button >
            <img src={IconPencil} alt="Editar Nota" />
          </Button>
          <Button onClick={handleOpen}>
            <img src={IconTrash} alt="Excluir Nota" />
          </Button>
        </div>
        <ModalExcluir open={open} setOpen={setOpen} nome={e.nome} id={e.id}/>        
      </div>
    </div>
  )

}
