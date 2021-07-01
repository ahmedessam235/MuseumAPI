import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { userDetailContext } from "../../App";
import { getLoggedInUser, getUsers } from "../../Actions/userActions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Users.css";
const useStyles = makeStyles({
  table: {
    minWidth: 0,
  },
});

function Users() {
  const [users, renderUsers] = React.useState("");
  var contextData = React.useContext(userDetailContext);
  const classes = useStyles();

  useEffect(() => {
    async function fetchData() {
      var token = Cookies.get("login-token");
      const requestedUsers = await getUsers(token);
      renderUsers(requestedUsers);
      getLoggedInUser(token, contextData);
    }
    fetchData();
  }, []);

  if (users) {
    return (
      <div className="usersTable">
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 100, maxWidth: 100 }}>
                  ID
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100 }}
                  align="right"
                >
                  Email
                </TableCell>
                <TableCell
                  style={{ minWidth: 100, maxWidth: 100 }}
                  align="right"
                >
                  Phone Number
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((item, index) => {
                return (
                  <TableRow key={item._id}>
                    <TableCell
                      style={{ minWidth: 100, maxWidth: 100 }}
                      component="th"
                      scope="row"
                    >
                      {index}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100, maxWidth: 100 }}
                      align="right"
                    >
                      {item.Email}
                    </TableCell>
                    <TableCell
                      style={{ minWidth: 100, maxWidth: 100 }}
                      align="right"
                    >
                      {item.PhoneNumber}
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
    return <h1>Loading .....</h1>;
  }
}

export default Users;
