import PropTypes from "prop-types";
import Pokemon from "./Pokemon"; // PokemonList contain its child (from pokemon component)

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <Pokemon
          key={index}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          stats={pokemon.stats}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      types: PropTypes.arrayOf(PropTypes.string).isRequired,
      stats: PropTypes.shape({
        hp: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        defense: PropTypes.number.isRequired,
        special: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PokemonList;
