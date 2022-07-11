import React from "react";
import male from "../img/male.png";
import female from "../img/female.png";
import { Link } from "react-router-dom";

const DisplayCard = (props) => {
  const { name, email, phone, id, gender } = props.propsToChild;

  return (
    <div className="contactLayout">
      <div className="savedContacts">
        {gender === "Male" ? (
          <img className="ui avatar image" src={male} alt="male" />
        ) : (
          <img className="ui avatar image" src={female} alt="female" />
        )}
        <div className="content">
          <div className="userName">{name}</div>
          <div style={{ color: "blue" }}>Email: {email}</div>
          <div style={{ color: "blue" }}>Phone: {phone}</div>
        </div>
      </div>
      <Link to={`/view/${id}`} state={{ userInfo: props.propsToChild }}>
        <button className="ui button red right">View</button>
      </Link>
    </div>
  );
};

export default DisplayCard;
