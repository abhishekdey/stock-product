import React from 'react';
import { useState } from 'react';
import ThemeContext from './FilterableProductTable';

function SearchBar(props) {
  const {filterRecords, setFilterRecords} = useState(ThemeContext);
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox"  onClick={() => setFilterRecords(!filterRecords)}/>
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

export default  SearchBar;