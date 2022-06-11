import React from "react";
import male from "../img/male.png";
import female from "../img/female.png";

const DisplayCard = (props) => {
  const { name, email, phone, id, gender } = props.propsToChild;

  return (
    <div className="item">
      {gender === "Male" ? (
        <img className="ui avatar image" src={male} alt="male" />
      ) : (
        <img className="ui avatar image" src={female} alt="female" />
      )}
      <div className="content">
        <div className="header">{name}</div>
        <div>Email: {email}</div>
        <div>Phone Number: {phone}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.deleteContact(id)}
      ></i>
    </div>
  );
};

export default DisplayCard;
