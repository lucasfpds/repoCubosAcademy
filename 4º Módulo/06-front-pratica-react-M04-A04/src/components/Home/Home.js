import Button from "@mui/material/Button";
import useStyle from "./Style";
import TableRow from "../TableRow/TableRow";
import { useState } from "react/cjs/react.development";
import ModalCadastrar from "../ModalCadastrar/ModalCadastrar";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";

export default function Home() {
  const classes = useStyle();

  const { obterContatos, contatos, setToken, hidden, setHidden } =
    useUser();
    
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    obterContatos();
  }, []);

  return (
    <div className={classes.home}>
      <p className={classes.header}>KONTACTS</p>

      <div className={classes.divMain}>
        <Button
          className={classes.btnAdc}
          onClick={handleOpen}
          variant="contained"
        >
          Adicionar
        </Button>
        <div className={classes.table}>
          <div className={classes.titles}>
            <p className={classes.title}>Nome</p>
            <p className={classes.title}>Email</p>
            <p className={classes.title}>Telefone</p>
          </div>
          <div>
            {contatos &&
            contatos.map(e=>{
              return <TableRow e={e}/>
             })
          }

          </div>
        </div>
      </div>
      <ModalCadastrar open={open} setOpen={setOpen} />
    </div>
  );
}
