import { createContext, React } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {
  const ThemeContext = createContext(null);
  // const filterRecords = (data) => {
  //   return data;
  // }

  return (
    <div>
      <ThemeContext.Provider value="false">
          <SearchBar />
          <ProductTable products={products}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default FilterableProductTable;
