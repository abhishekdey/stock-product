// import React from 'react';

// export default function Section(props) {
//   return (
//    <div>Change Theme</div>
//   );
// }


import { LevelContext } from "./level-context";
import { useContext , React} from "react";

export default function Section({ level, children }) {
  const level1 = useContext(LevelContext);
  level1.level = level;
  return (
    <section className="section">
      <LevelContext.Provider value={level1}>{children}</LevelContext.Provider>
    </section>
  );
}
