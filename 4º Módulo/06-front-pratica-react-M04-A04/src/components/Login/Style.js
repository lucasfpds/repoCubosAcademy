import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  login: {
    display: "flex",
    flexDirection: "row",
  },
  divImg: {
      width: '50%',
  },
  img: {
      width: 'fit-content',
      height: 'auto',
  },
  divInfos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    gap: '5em',
  },
  btnLogin:{
      marginTop: '2em!important',
      color: 'white!important',
      backgroundColor: '#04C45C!important',
      height: '3em',
      width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
  },
  toast: {
    position: 'absolute',
    right: '1vw',
    top: '1vw',
  },
}));
