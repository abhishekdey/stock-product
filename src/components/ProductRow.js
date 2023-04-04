import React, { useContext, useEffect } from 'react';
import {ThemeContext} from './theme-context';

export default function ProductRow({product,isStock}) {
  //const [level, setLevel] = React.useState(ThemeContext);
  //const level1 = React.useContext(ThemeContext);
  
  // const setFilterRecordsEvent = () => {
  //   let levelEval = 1;
  //   setLevel(++levelEval);
  //   //level1.setFilterRecordsEvent()
  //   level1.level = level;
  //   //console.log(level1);
  // }

  // useEffect(() => {
  //     //console.log(isStocked);
  //     //level1.level = level;
  //    console.log(level1);
  //   });
  //setFilterRecordsEvent();
  //console.log(level1);


  const name = product.stocked? product.name  : <span style={{color: 'red'}}>{product.name}</span>;
  const price = product.stocked? product.price  : <span style={{color: 'red'}}>{product.price}</span>;


  return (
    product.stocked === isStock ? 
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>        
    :isStock === false ? 
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr> : ''      
  );
}