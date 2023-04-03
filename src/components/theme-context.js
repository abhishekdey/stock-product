// import React from 'react';
// import useState  from 'react';

// export const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   }
// };

// export const ThemeContext = React.createContext({
//   isStocked: false ,
//   setFilterRecordsEvent: () => {setFilterRecords(!isStocked)},
// });

//const {isStocked, setFilterRecords} = React.useState(ThemeContext);
//   export const setFilterRecordsEvennt = (event) => {
//     setFilterRecords(!filterRecords);
//   }


// export const ThemeContext = React.createContext({
//   isStocked: false,
//   level: undefined,
//   setFilterRecordsEvent: () => {
//     this.isStocked = !this.isStocked;
//   }
// });

//export const { isStocked, setFilterRecords } = useState(LevelContext);



import { createContext } from "react";
import {DATA} from "../constants";
export const ThemeContext = createContext({
  isStocked: false,
  level: undefined,
  data: DATA,
  setFilterRecordsEvent: () => {
    this.isStocked = !this.isStocked;
  }
});

//export const { isStocked, setFilterRecords } = useState(LevelContext);

