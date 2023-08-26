import axios from "axios";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

export default () => {
  const [pokemondata, setPokemondata] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((data) => setPokemondata(data.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {console.log(pokemondata)}
      <div class="pokemon-heading"> Pokemon Details</div>
      <div className="pokemondata">
        {pokemondata.map((pokemon) => {
          return (
            <Grid item xs={6} md={4}>
              <div className="pokemon">
                {/* <Link path="#"> {pokemon.name}</Link> */}
              </div>
            </Grid>
          );
        })}
      </div>
    </div>
  );
};
