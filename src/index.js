import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable';
import {DATA} from "./constants";
const rootElement = document.getElementById('root');

ReactDOM.render(
        <FilterableProductTable products={DATA}/>, rootElement
);