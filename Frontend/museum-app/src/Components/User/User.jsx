import React from "react";

function User(props) {
    console.log(props.Email,"emails");
  return (
    <div>
      <p>{props.Email}</p>  
      <p>{props.PhoneNumber}</p>
    </div>
  );
}

export default User;
