
import FilterableProductTable from './components/FilterableProductTable';
//import {ThemeContext} from './components/theme-context';


// second solution
import React from "react";
import "./styles.css";
import App from './components/App';
import ReactDOM from 'react-dom';
import {DATA} from "./constants";
const rootElement = document.getElementById('root');

const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

// ReactDOM.render(
//         <App products={DATA}/>, rootElement
// );

// ReactDOM.render(    
//         <FilterableProductTable products={DATA}/>, rootElement  
// );

ReactDOM.render(
        <App items={items}/>, rootElement
);