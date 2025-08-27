import "./ListaPokemon.css"
import { useState, useEffect } from "react";

export default function ListaPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function buscarPokemons() {
      const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
      const data = await resposta.json();

      const listaFormatada = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
      }));

      setPokemons(listaFormatada);
    }

    buscarPokemons();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id} className="Pokemon">
            <h3>{pokemon.name}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="PokemonIMG"
              alt={pokemon.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
