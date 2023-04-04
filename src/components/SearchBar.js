import React,{useState,useContext} from 'react';
import {ThemeContext} from './theme-context';
//import { useContext} from "react";
//import { LevelContext } from "./level-context";

export default function SearchBar({filterList}) {
  const level1 = useContext(ThemeContext);
  //const ThemeContext1 = React.useContext(ThemeContext);
  //const level1 = useContext(LevelContext);
  //console.log(ThemeContext1);


  // const {filterRecords, setFilterRecords} = useState(ThemeContext);
  //   const level1 = useContext(ThemeContext);
  //   const setFilterRecordsEvent = () => {
  //     setFilterRecords(!filterRecords);
  //   }
  //console.log(level1);
  //console.log(props);
  return (
    <ThemeContext.Consumer>
      {({isStocked, level}) => (
       <section className="section1">
          <input type="text" placeholder="Search..." />
          <label>
            <input type="checkbox" defaultChecked={isStocked} onClick={() => filterList()}/>
            {' '}
          Only show products in stock {level}
          </label>
        </section>
      )}
    </ThemeContext.Consumer>
    // <section className="section1">
    //   <input type="text" placeholder="Search..." />
    //   <label id="checkbox1">
    //     <input name="checkbox1" type="checkbox" defaultChecked={level1.isStocked} onClick={() => filterList()}/>
    //     {' '}
    //     Only show products in stock
    //   </label>
    // </section>
   //<LevelContext.Provider value={level1}>{children}</LevelContext.Provider>
  );
}

// function SearchBar() {
//   return (
//     <form>
//       <input type="text" placeholder="Search..." />
//       <label>
//         <input type="checkbox" />
//         {' '}
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

//export default  SearchBar;