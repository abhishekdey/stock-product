import React from 'react';

export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="90">
        {category}
      </th>
    </tr>
  );
}