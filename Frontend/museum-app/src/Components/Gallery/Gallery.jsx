import Cookies from "js-cookie";
import React,{useEffect} from "react";
import Art from "../Art/Art";
import NavBar from "../NavBar/NavBar";
import { getArt } from "../../Actions/artActions";
import { userDetailContext } from '../../App';
import {getLoggedInUser} from "../../Actions/userActions";

function Gallery() {
    const [pictures, getPictures] = React.useState("");
    var contextData = React.useContext(userDetailContext);
    useEffect(() => {
        async function fetchData() {
         var token = Cookies.get("login-token");
          const requestedArt = await getArt(token);
          getPictures(requestedArt);
          getLoggedInUser(token,contextData);
        }  fetchData();
    }, []);

 if(pictures) {
  return (
    <div>
       <NavBar />
       <h1>Gallery</h1>
       {pictures.map((picture, index) => {
                  return (
                    <Art 
                      key={index}
                      id={index}
                      artistName={picture.Artist}
                      ID={picture._id}
                      picture= {picture.Picture}
                      description= {picture.Description}
                    />
                  );
                })}
     
    </div>
  );
} else {
    return(<h1>Loading .....</h1>)
}
}

export default Gallery;
