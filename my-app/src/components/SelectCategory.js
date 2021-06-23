import React, { useState } from "react";
import { Link } from "react-router-dom";

function SelectCategory() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <label htmlFor="category">Category: </label>
      <select name="category" value={value} onChange={handleChange}>
        <option value="men's clothing">Men's clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
      <Link to={`/category/${value}`}>
        <input className="submit" type="submit" value="Submit" />
      </Link>
    </>
  );
}
export default SelectCategory;
