import "./App.css";
import Title from "./Title";
import PokemonList from "./PokemonList";
import PokemonData from "./PokemonData";

const App = () => {
  const heading = "Pokemon Gallery";

  return (
    <>
      <div className="App">
        <Title text={heading} />
        <div className="pokemon-cards">
          <PokemonList pokemonList={PokemonData} />{" "}
          {/* we pass the pokemonList prop with value {PokemonData to the PokemonList component} */}
        </div>
      </div>
      ;
    </>
  );
};

export default App;
