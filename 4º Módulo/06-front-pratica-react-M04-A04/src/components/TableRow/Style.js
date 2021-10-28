import { makeStyles } from "@material-ui/styles";
import { textAlign } from "@mui/system";

export default makeStyles((theme) => ({
  row: {
    display: "flex",
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: '#FFFAFA',
    marginBottom: '1vw',
    height: '3vw',
    padding: "0 3em",
  },
  rowItem: {
    width: "25% ",
  },
  rowIcons:{
    marginLeft: 'auto',
  },
}));
