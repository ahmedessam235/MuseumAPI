import React from "react";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import './Art.css';
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 1000,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
  },
}));

function Art(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(props.description);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Card >
     <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={props.picture}
          title="Contemplative Reptile"
        />
        <p>{props.description}</p>
      {/* <Art /> */}
      </Card>
    </div>
  );
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
      
      <Button onClick={handleOpen}>{props.artistName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
      </Card>
    </div>
  );
}

export default Art;
