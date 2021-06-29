import Cookies from "js-cookie";
import React,{useEffect} from "react";
import Art from "../Art/Art";
import NavBar from "../NavBar/NavBar";
import { getArt } from "../../Actions/artActions";

function Gallery() {
    const [pictures, getPictures] = React.useState("");

    useEffect(() => {
        async function fetchData() {
         var token = Cookies.get("login-token");
          const requestedArt = await getArt(token);
          getPictures(requestedArt);
        }  fetchData();
    }, []);

 if(pictures) {
     console.log(pictures,"after rendering ");
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
