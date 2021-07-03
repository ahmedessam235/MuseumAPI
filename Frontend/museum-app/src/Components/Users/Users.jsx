import Cookies from "js-cookie";
import React, { useState,useEffect } from "react";
import { userDetailContext } from "../../App";
import { getLoggedInUser, getUsers } from "../../Actions/userActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Users.css";

function Users() {
  const [users, renderUsers] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  var contextData = React.useContext(userDetailContext);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    async function fetchData() {
      var token = Cookies.get("login-token");
      const requestedUsers = await getUsers(token,pageNumber);
      renderUsers(requestedUsers.result);
      setNumberOfPages(requestedUsers.totalPages);
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

  if (users) {
    console.log(users);
    return (
      <div className="usersTable">
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 100 }}>
                  ID
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 100 }}>
                  Email
                </TableCell>
                <TableCell style={{ minWidth: 100, maxWidth: 100, width: 20 }}>
                  Phone Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell component="th" scope="row">
                      {index}
                    </TableCell>
                    <TableCell>{item.Email}</TableCell>
                    <TableCell>{item.PhoneNumber}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
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

export default Users;
