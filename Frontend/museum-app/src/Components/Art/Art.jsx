import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './Art.css';
function Art(props) {
  return (
    <div className="single-image">
     <Card style = {{maxWidth: 300}}>
     <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={props.picture}
          title="Contemplative Reptile"
        />
      {/* <img src={props.picture} alt="art piture" /> */}
      <p>{props.artistName}</p>
      </Card>
    </div>
  );
}

export default Art;
