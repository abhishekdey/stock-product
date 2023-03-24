import React from 'react';

function ProductCategoryRow({params}) {
  // const filterRecords = (data) => {
  //   return data;
  // }

  return (
    <tr>
      <th colSpan="5">
          {params}
      </th>
    </tr>
  )
}


export default ProductCategoryRow;