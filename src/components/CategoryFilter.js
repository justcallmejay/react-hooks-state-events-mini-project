import React, { useState } from "react";
import { CATEGORIES } from "../data";

function CategoryFilter( { category, setCategory } ) {

  const [selected, setSelected] = useState('')

  const filterCat = CATEGORIES.map((cat, index) => {
    return <button className={selected === index ? "selected" : "" } onClick={(e) => {setSelected(index); setCategory(e.target.value)}} value={cat} key={index} id={index}>{cat}</button>
  })

  return (
    <span className="categories">
      <h5 key="category-filter">Category filters</h5> 
          {filterCat}
    </span>
  );
}

export default CategoryFilter;