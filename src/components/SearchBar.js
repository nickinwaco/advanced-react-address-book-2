import React from "react";


function SearchBar(props) {

  return (
    <form>
      <input type="text" name="query" onChange={(event) => {
        console.log(event);
      }} />
    </form>
  );
}

export default SearchBar;
