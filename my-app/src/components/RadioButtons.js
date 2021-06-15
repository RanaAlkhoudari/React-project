import React, { useState } from "react";
import { Link } from "react-router-dom";

function RadioButtons() {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <span>Sort: </span>

      <label htmlFor="asc">asc</label>
      <input
        type="radio"
        id="asc"
        name="sort"
        value="asc"
        onChange={handleChange}
      />

      <label htmlFor="desc">desc</label>
      <input
        type="radio"
        id="desc"
        name="sort"
        value="desc"
        onChange={handleChange}
      />
      <Link to={`/sort/${value}`}>
        <input className="submit" type="submit" value="Submit" />
      </Link>
    </>
  );
}

export default RadioButtons;
