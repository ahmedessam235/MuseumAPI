import React from "react";

function Art(props) {
  return (<div>
  <img src={props.picture} alt="art piture" />
  <p>{props.artistName}</p>
  </div>);
}

export default Art;
