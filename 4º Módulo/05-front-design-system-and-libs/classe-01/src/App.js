/* eslint-disable react-hooks/exhaustive-deps */
import { useLocalStorage } from "react-use";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CustomCard from "./components/Card/Card";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from '@mui/material/Button';
import useStyle from "./Style";

export default function App() {
  const classes = useStyle();

  const [pokemon, setPokemon] = useState();
  const [namePokemon, setNamePokemon] = useState("pikachu");
  const [value, setValue] = useLocalStorage("pokemons", []);
  const [alert, setAlert] = useState(false);
  async function handleRequest() {
    try {
      const filtro = value.filter((e) => e.name === namePokemon);
      if (filtro[0]) {
        setPokemon(filtro[0]);
        setAlert(false);
        return;
      }
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
      );
      const data = await response.json();
      const {
        name,
        sprites: { other },
        abilities,
      } = data;
      const {
        dream_world: { front_default },
      } = other;
      const currentPokemon = {
        name,
        abilities,
        image: front_default,
      };
      setPokemon(currentPokemon);
      setValue([...value, currentPokemon]);
      setAlert(false);
    } catch (error) {
      console.log(error);
      setAlert(true);
    }
  }
  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {pokemon && <CustomCard pokemon={pokemon} />}
      <TextField
        id="outlined-basic"
        onChange={(e) => setNamePokemon(e.target.value)}
        label="Search New Pokemon"
        variant="outlined"
        className={classes.input}
      />
      <Button variant="contained" className={classes.btn} onClick={handleRequest}>Search</Button>

      {alert && (
        <Alert severity="error" >O POKEMON NÃO FOI ENCONTRADO</Alert>
      )}
    </div>
  );
}
