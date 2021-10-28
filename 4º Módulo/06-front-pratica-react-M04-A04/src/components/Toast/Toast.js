import { Stack, Alert } from "@mui/material";

import useStyle from "./Style";
import useUser from "../../hooks/useUser";


export default function Toast(value) {
    const classes = useStyle();
    const {msg} = value
  return (
    <>
      <Stack className={`${classes.toast} `} spacing={2}>
        <Alert variant="filled" severity="error">
          {msg}
        </Alert>
      </Stack>
    </>
  );
}
