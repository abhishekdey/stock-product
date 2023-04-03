import React from 'react';

export default function ProductRow({product,isStock}) {
  const name = product.stocked? product.name  : <span style={{color: 'red'}}>{product.name}</span>;
  return (
    product.stocked === isStock ? 
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>        
    :!!isStock === false ? 
    <tr>
      <td>{name}</td>
       <td>{product.price}</td>
    </tr> : ''      
  );
}