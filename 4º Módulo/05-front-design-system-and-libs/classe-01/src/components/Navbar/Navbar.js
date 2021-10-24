import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from './Style'
import { AppBar } from '@mui/material';


export default function Navbar() {
const classes = useStyles();  

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar className={classes.toobar}>
          <Typography align="center" variant="h6" noWrap className={classes.title}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
