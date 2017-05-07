import React from "react";
import PropTypes from "prop-types";


function SearchBar(props) {

  return (
    <form>
      <input type="text" name="query" onChange={(event) => {
        console.log(event.target.value);
        props.onChange(event.target.value);
      }} />
    </form>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
