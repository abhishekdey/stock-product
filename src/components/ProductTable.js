
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
//import {ThemeContext} from './theme-context';

export default function ProductTable({products}) {
  const rows = [];
  let lastCategory = null;
  //let isStocked = false || ThemeContext;
  //const a1 = [products.products];
  //console.log(products);
  
  products.data.forEach(product => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }

    rows.push(
      <ProductRow
        isStock = {products.isStocked}
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}