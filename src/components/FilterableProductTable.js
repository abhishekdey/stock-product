import React,{useState,useContext} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import {ThemeContext} from './theme-context';
//export const ThemeContext = React.createContext(false);

export default function FilterableProductTable() {
    //const {isStocked, setFilterRecords} = useState(ThemeContext);
    const [isStocked, setFilterRecords] = React.useState(ThemeContext);
    const level1 = useContext(ThemeContext);
    const setFilterRecordsEvent = () => {
      setFilterRecords(!isStocked);
      //level1.setFilterRecordsEvent()
      level1.isStocked = isStocked;
      //console.log(level1);
    }
  
    return (
      <div>
        <ThemeContext.Provider value={level1}>
              <div>
                <SearchBar filterList={() => setFilterRecordsEvent()}/>
                <ProductTable products={level1}/>
              </div>
        </ThemeContext.Provider>
      </div>
    );
}

//export default FilterableProductTable;
// class FilterableProductTable extends Component {
//     render()
//     {
//         return (
//         <ThemeContext.Provider value="false">
//             <SearchBar />
//             <ProductTable products={DATA}/>
//         </ThemeContext.Provider>
//       );
//     }
// }
 
// ReactDOM.render(
//   <FilterableProductTable/>,
//   document.getElementById('root')
// );
