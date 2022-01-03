import React from "react";

function Profile(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default Profile;
