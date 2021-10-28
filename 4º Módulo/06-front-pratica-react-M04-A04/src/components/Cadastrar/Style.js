import { makeStyles } from "@material-ui/styles";
import { height } from "@mui/system";

export default makeStyles((theme) => ({
  cadastrar: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  divImg: {
      width: '50%',
  },
  divInfos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: '5em',
  },
  btnLogin:{
      marginTop: '2em!important',
      color: 'white!important',
      backgroundColor: '#04C45C!important',
      height: '3em',
  },
  linkCancel:{
    width: "100%",
  },
  btnCancel:{
    width: "100%",
      color: 'white!important',
      backgroundColor: 'rgba(251, 6, 21, 0.65)!important',
      height: '3em',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: '65%',
    gap: "1em",
  },
}));
