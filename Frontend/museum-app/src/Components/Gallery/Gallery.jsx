import Cookies from "js-cookie";
import React, { useEffect,useState   } from "react";
import Art from "../Art/Art";
import NavBar from "../NavBar/NavBar";
import { getArt } from "../../Actions/artActions";
import { userDetailContext } from "../../App";
import { getLoggedInUser } from "../../Actions/userActions";
import "./Gallery.css";

function Gallery() {

  const [pictures, getPictures] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  var contextData = React.useContext(userDetailContext);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  useEffect(() => {
    async function fetchData() {
      var token = Cookies.get("login-token");
      const requestedArt = await getArt(token,pageNumber);
      getPictures(requestedArt.result); 
      setNumberOfPages(requestedArt.totalPages);
      getLoggedInUser(token, contextData);
    }
    fetchData();
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  if (pictures) {
    return (
      <div>
      <div className="gallery">
        <NavBar />
        <h1 className="gallery-title">Gallery</h1>
        <div className="art">
          {pictures.map((picture, index) => {
            return (
              <Art
                key={index}
                id={index}
                artistName={picture.Artist}
                ID={picture._id}
                picture={picture.Picture}
                description={picture.Description}
              />
            );
          })}
         

        </div>
      </div>
      <button onClick={gotoPrevious}>Previous</button>
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
          {pageIndex + 1}
        </button>
      ))}
      <button onClick={gotoNext}>Next</button>
      </div>
    );
  } else {
    return <h1>Loading .....</h1>;
  }
}

export default Gallery;
