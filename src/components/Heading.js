import { useContext, React } from "react";
import {LevelContext} from "./level-context";

export default function Heading({ children }) {
  const level1 = useContext(LevelContext);
  //console.log(level1);
  //console.log(children);
  switch (level1.level) {
    case 1:
      return (
        <h1>
          {children}
          {level1.level}
        </h1>
      );
    case 2:
      return (
        <h2>
          {children} {level1.level}
        </h2>
      );
    case 3:
      return (
        <h3>
          {children}
          {level1.level}
        </h3>
      );
    case 4:
      return (
        <h4>
          {children}
          {level1.level}
        </h4>
      );
    case 5:
      return (
        <h5>
          {children}
          {level1.level}
        </h5>
      );
    case 6:
      return (
        <h6>
          {children}
          {level1.level}
        </h6>
      );
    default:
      throw Error("Unknown level: " + level1.level);
  }
}
