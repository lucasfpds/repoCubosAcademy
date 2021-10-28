import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35vw',
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    gap: '3vh',
    height: 'max-content',
    padding: '2vw',
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
