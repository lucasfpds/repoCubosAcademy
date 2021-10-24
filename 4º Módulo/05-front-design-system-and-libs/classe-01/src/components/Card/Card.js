import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useStyle from "./Style";

export default function CustomCard(props) {
  const { pokemon } = props;

  const classes = useStyle();

  return (
    <Card className={`${classes.root}`}>
      <CardHeader title={pokemon.name} className={classes.cardHeader} />
      <CardMedia
        component="img"
        className={classes.media}
        height="194"
        image={pokemon.image}
        title={pokemon.name}
        alt={`imagem ${pokemon.name}`}
      />
      <CardContent>
        {pokemon.abilities.map((e) => (
          <Typography variant="h6">{e.ability.name}</Typography>
        ))}
      </CardContent>
    </Card>
  );
}
