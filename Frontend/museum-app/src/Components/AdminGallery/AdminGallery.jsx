import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getArt, deleteImage } from "../../Actions/artActions";
import { Button } from "@material-ui/core";

import "./AdminGallery.css";
function AdminGallery() {
  const [galleryData, renderGalleryData] = useState("");

  useEffect(() => {
    async function fetchData() {
      var token = Cookies.get("login-token");
      const requestedGalleryData = await getArt(token);
      renderGalleryData(requestedGalleryData);
    }
    fetchData();
  }, []);
  if (galleryData) {
    async function handleDelete(index) {
      var token = Cookies.get("login-token");
      var id;
      id = galleryData[index]._id; //getting the mongodb ID to perfrom delete request
      await deleteImage(id, token);
      const requestedGalleryData = await getArt(token);
      renderGalleryData(requestedGalleryData);
    }
    return (
      <div className="usersTable">
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 100 }}>
                  Item
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 100 }}>
                  Name
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 20 }}>
                  Artist
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 20 }}>
                  Description
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 20 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {galleryData.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell component="th" scope="row">
                      <img
                        className="admin-gallery-photo"
                        src={item.Picture}
                        alt="table item"
                      />
                    </TableCell>
                    <TableCell>
                      <p>Art Name</p>
                    </TableCell>
                    <TableCell>{item.Artist}</TableCell>
                    <TableCell>{item.Description}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={(event) => {
                          //   event.preventDefault();
                          handleDelete(index);
                        }}
                      >
                        delete
                      </Button>
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
    return <h1>Loading</h1>;
  }
}

export default AdminGallery;
