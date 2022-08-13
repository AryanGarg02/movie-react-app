import React from "react";
import '../App.css'

const SearchBox = (props) => {
    return (
      <div className="search-row">
        <input
          className="input-box"
          value={props.value}
          onChange={(event)=> props.setSearchValue(event.target.value)}
          placeholder="Type to search"
        />
      </div>
    );
}

export default SearchBox;