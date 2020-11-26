import { controllers } from "chart.js";
import React from "react";
import "./Bouton.css"
const Bouton = (props) => {
  return (
    <div>
      <a href={"/"+props.id}><input class="bouton" type="button" value={props.name}></input></a>
    </div>
  );
};

export default Bouton;
