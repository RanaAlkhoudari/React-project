import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchNumber() {
  const [value, setValue] = useState(0);

  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <label htmlFor="quantity">Limit: </label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="20"
        value={value}
        onChange={handleChange}
      />
      <Link to={`/limit/${value}`}>
        <input className="submit" type="submit" value="Submit" />
      </Link>
    </>
  );
}

export default SearchNumber;
