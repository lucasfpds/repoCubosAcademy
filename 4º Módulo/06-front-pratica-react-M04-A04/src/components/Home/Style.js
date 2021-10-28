import { makeStyles } from "@material-ui/styles";
import { textAlign } from "@mui/system";

export default makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#134563",
    textAlign: "center",
    height: "3em ",
    color: "#fff",
    marginBottom: "8em",
  },
  divMain: {
    padding: "0 15em",
  },
  btnAdc: {
    marginBottom: "4em!important",
    backgroundColor: "#04C45C!important",
    height: "3em",
  },
  titles: {
    height: "3em ",
    display: "flex",
    background: "#F4F0F0",
    padding: "0 3em",
    alignItems: "center",
  },
  table: {
    width: "100%",
  },
  title: {
    width: "25% ",
    fontWeight: "bold",
  },
  input: {
    width: "75% ",
  },
  cadastrar: {
    width: "75%",
    marginTop: "2em!important",
    color: "white!important",
    backgroundColor: "#04C45C!important",
    height: "3em",
  },
  btnCancel: {
    width: "75%",
    color: "white!important",
    backgroundColor: "rgba(251, 6, 21, 0.65)!important",
    height: "3em",
  },
}));
