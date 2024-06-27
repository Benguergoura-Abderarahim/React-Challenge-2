// I tried to use the require method which is more dynamic but it didn't work so I followed this static way : (import assets & assign names for each)

import ScytherImage from "./assets/pokemon.Img/Scyther.png";
import MoltresImage from "./assets/pokemon.Img/Moltres.png";
import ArticunoImage from "./assets/pokemon.Img/Articuno.png";
import MewtwoImage from "./assets/pokemon.Img/Mewtwo.png";
import GengarImage from "./assets/pokemon.Img/Gengar.png";
import LaprasImage from "./assets/pokemon.Img/Lapras.png";
import BulbasaurImage from "./assets/pokemon.Img/Bulbasaur.png";
import ZapdosImage from "./assets/pokemon.Img/Zapdos.png";
import RhydonImage from "./assets/pokemon.Img/Rhydon.png";
import DragoniteImage from "./assets/pokemon.Img/Dragonite.png";
import SnorlaxImage from "./assets/pokemon.Img/Snorlax.png";
import PoliwrathImage from "./assets/pokemon.Img/Poliwrath.png";

// building the data to be used as prop in the main component (App)
const PokemonData = [
  {
    name: "Scyther",
    image: ScytherImage,
    types: ["Bug", "Flying"],
    stats: {
      hp: 70,
      attack: 110,
      defense: 80,
      special: 55,
      speed: 105,
    },
  },
  {
    name: "Moltres",
    image: MoltresImage,
    types: ["Fire", "Flying"],
    stats: {
      hp: 90,
      attack: 100,
      defense: 90,
      special: 125,
      speed: 90,
    },
  },
  {
    name: "Articuno",
    image: ArticunoImage,
    types: ["Ice", "Flying"],
    stats: {
      hp: 90,
      attack: 85,
      defense: 100,
      special: 125,
      speed: 85,
    },
  },
  {
    name: "Mewtwo",
    image: MewtwoImage,
    types: ["Psychic"],
    stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      special: 154,
      speed: 130,
    },
  },
  {
    name: "Gengar",
    image: GengarImage,
    types: ["Ghost", "Poison"],
    stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      special: 130,
      speed: 110,
    },
  },
  {
    name: "Lapras",
    image: LaprasImage,
    types: ["Water", "Ice"],
    stats: {
      hp: 130,
      attack: 85,
      defense: 80,
      special: 95,
      speed: 60,
    },
  },
  {
    name: "Bulbasaur",
    image: BulbasaurImage,
    types: ["Grass", "Poison"],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      special: 65,
      speed: 45,
    },
  },
  {
    name: "Zapdos",
    image: ZapdosImage,
    types: ["Electric", "Flying"],
    stats: {
      hp: 90,
      attack: 90,
      defense: 85,
      special: 125,
      speed: 100,
    },
  },
  {
    name: "Rhydon",
    image: RhydonImage,
    types: ["Ground", "Rock"],
    stats: {
      hp: 105,
      attack: 130,
      defense: 120,
      special: 45,
      speed: 40,
    },
  },
  {
    name: "Dragonite",
    image: DragoniteImage,
    types: ["Dragon", "Flying"],
    stats: {
      hp: 91,
      attack: 134,
      defense: 95,
      special: 100,
      speed: 80,
    },
  },
  {
    name: "Snorlax",
    image: SnorlaxImage,
    types: ["Normal"],
    stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      special: 65,
      speed: 30,
    },
  },
  {
    name: "Poliwrath",
    image: PoliwrathImage,
    types: ["Water", "Fight"],
    stats: {
      hp: 90,
      attack: 85,
      defense: 95,
      special: 70,
      speed: 70,
    },
  },
];

export default PokemonData;
