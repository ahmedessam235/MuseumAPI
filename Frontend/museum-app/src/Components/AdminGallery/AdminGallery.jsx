import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {getArt}  from "../../Actions/artActions";
function AdminGallery (){

    const [galleryData, renderGalleryData] = useState("");

    useEffect(() => {
        async function fetchData() {
          var token = Cookies.get("login-token");
          const requestedGalleryData = await getArt(token);
          renderGalleryData(requestedGalleryData);
        //   getLoggedInUser(token, contextData);
        }
        fetchData();
      }, []);
    if (galleryData) {
        console.log(galleryData);
    return (
        <div className="usersTable">
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100, maxWidth: 100,width:100 }}>
                  Item
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100,width:100  }}
                >
                  Name
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100,width:20 }}   
                >
                 Artist
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100,width:20 }}   
                >
                 Description
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100,width:20 }}   
                >
                 Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
               {galleryData.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell
                      component="th"
                      scope="row"
                    >
                      <img src={item.Picture} alt="table item" />
                    </TableCell>
                    <TableCell
                    >
                      <p>Art Name</p>
                    </TableCell>
                    <TableCell
                    >
                      {item.Artist}
                    </TableCell>
                    <TableCell
                    >
                      {item.Description}
                    </TableCell>
                    <TableCell
                    >
                      <button>delete</button>
                    </TableCell>
                  </TableRow>
                );
              })} 
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
} else {
    return (
        <h1>Loading</h1>
    );
}
}

export default AdminGallery;