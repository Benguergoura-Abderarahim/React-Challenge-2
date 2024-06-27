//this here is the original code I made : the bg of text of types (for pokemon) should be one of the following colors

/* import PropTypes from "prop-types";

const typeColors = {
  Bug: "#a8b820",
  Dragon: "#7038f8",
  Electric: "#f8d73c",
  Fight: "#c03028",
  Fire: "#f08030",
  Flying: "#a18cda",
  Ghost: "#705898",
  Grass: "#78c850",
  Ground: "#e0c068",
  Ice: "#98d8d8",
  Normal: "#a8a878",
  Poison: "#a040a0",
  Psychic: "#f85888",
  Rock: "#b8a038",
  Water: "#6890f0",
};

const Pokemon = ({ name, image, types, stats }) => {
  // Map each type to its corresponding CSS class
  const typeClasses = types.map((type) => type.toLowerCase()).join(" ");

  return (
    <div className={`pokemon ${typeClasses}`}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="types-container">
        Type(s):
        {types.map((type, index) => (
          <span
            key={index}
            className="type"
            style={{ backgroundColor: typeColors[type] }}
          >
            {type}
          </span>
        ))}
      </div>
      <p>Stats:</p>
      <ul>
        <li>HP: {stats.hp}</li>
        <li>Attack: {stats.attack}</li>
        <li>Defense: {stats.defense}</li>
        <li>Special: {stats.special}</li>
        <li>Speed: {stats.speed}</li>
      </ul>
    </div>
  );
};

Pokemon.propTypes = {
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
};

export default Pokemon;
 */

/* Here is the more advanced code : with some help & search from web, I added a background for each pokemon-card element depending on its type: 
if 1 type : pokemon-card bg == type bg, if > 1 type : pokemon-card bg = blend (a mix mainly -average-) colors of each type 
(like the average color of sum of the 2 types). Of course, taking into account converting from hex to rgb & inversely */

import PropTypes from "prop-types";

const typeColors = {
  Bug: "#a8b820",
  Dragon: "#7038f8",
  Electric: "#f8d73c",
  Fight: "#c03028",
  Fire: "#f08030",
  Flying: "#a18cda",
  Ghost: "#705898",
  Grass: "#78c850",
  Ground: "#e0c068",
  Ice: "#98d8d8",
  Normal: "#a8a878",
  Poison: "#a040a0",
  Psychic: "#f85888",
  Rock: "#b8a038",
  Water: "#6890f0",
};
// Function to calculate blended color based on types
const calculateBackgroundColor = (types) => {
  if (types.length === 1) {
    return typeColors[types[0]];
  }
  // Calculate blended color for multiple types
  const colors = types.map((type) => typeColors[type]);
  const blendedColor = blendColors(colors);
  return blendedColor;
};
// Function to blend colors based on weighted average of RGB values
const blendColors = (colors) => {
  let totalR = 0,
    totalG = 0,
    totalB = 0;
  colors.forEach((color) => {
    const rgb = hexToRgb(color);
    totalR += rgb.r;
    totalG += rgb.g;
    totalB += rgb.b;
  });
  const numColors = colors.length; // in case let's say either R, G or B = 0 => length will always be <= 3
  const avgR = Math.round(totalR / numColors);
  const avgG = Math.round(totalG / numColors);
  const avgB = Math.round(totalB / numColors);
  return rgbToHex(avgR, avgG, avgB);
};
// Function to convert hex color to RGB object
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16); // hex.slice(1): remove the "#" character (the 1st character) in a hex color. parseInt to turn hex to base 10 (decimal)
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }; // an operation to extract r, g, b from the color (a bit complex to understand unless you look into some maths)
};
// Function to convert RGB components to hex color
const rgbToHex = (r, g, b) => {
  // 24 + 16 + 8 = 48 (& hex color has 6 digit with each digit is an 8 binary which means : 8*6 = 48), also:
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`; //(1 << 24) + (r << 16) + (g << 8) + b ensure to have the format #RRGGBB by shifting & combining them to get the RGB color which then is converted to hex (tostring(16))
};
// Pokemon component
const Pokemon = ({ name, image, types, stats }) => {
  const typeClasses = types.map((type) => type.toLowerCase()).join(" ");
  const backgroundColor = calculateBackgroundColor(types);

  return (
    <div className={`pokemon ${typeClasses}`} style={{ backgroundColor }}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div className="types-container">
        Type(s):
        {types.map((type, index) => (
          <span
            key={index}
            className="type"
            style={{ backgroundColor: typeColors[type] }}
          >
            {type}
          </span>
        ))}
      </div>
      <p>Stats:</p>
      <ul>
        <li>HP: {stats.hp}</li>
        <li>Attack: {stats.attack}</li>
        <li>Defense: {stats.defense}</li>
        <li>Special: {stats.special}</li>
        <li>Speed: {stats.speed}</li>
      </ul>
    </div>
  );
};

Pokemon.propTypes = {
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
};

export default Pokemon;
