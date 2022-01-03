import React from "react";
import propTypes from "prop-types";
const Workshop = ({ contact, alert }) => {
  return (
    <div className="profile">
      <img className="image" src={contact.img} alt={contact.name}></img>
      <h1> Name: {contact.name}</h1>
      <h3>Profession : {contact.profession}</h3>
      <p>Bio : {contact.bio}</p>
      <button onClick={() => alert(contact.name)}>Hello</button>
    </div>
  );
};
Workshop.propTypes = {
  name: propTypes.string,
  profession: propTypes.string,
  bio: propTypes.string,
};
export default Workshop;
