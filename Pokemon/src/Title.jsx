// PropTypes is a way to ensure correctness & reliability of codes by validating passed props to other component(s).
// I used it to fix warnings about props.

import PropTypes from "prop-types";

const Title = ({ text }) => {
  return <h1>{text}</h1>;
};

// here, the type of prop {text} MUST be : string, otherwise, react will issue a warning
Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title; // It wasn't a duty to make such this simpler component but made it to check if course was well understood.
