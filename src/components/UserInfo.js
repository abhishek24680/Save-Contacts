import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import male from "../img/male.png";
import female from "../img/female.png";

const UserInfo = () => {
  const location = useLocation();
  console.log(location);
  const { userInfo } = location.state;
  return (
    <div className="main">
      <div className="userInfo">
        <div className="image">
          {userInfo.gender === "Male" ? (
            <img className="userImage" src={male} alt="male" />
          ) : (
            <img className="userImage" src={female} alt="female" />
          )}
        </div>
      </div>
      <div className="userDetails">
        <h2>About</h2>
        <p>
          <b>Name:</b> {userInfo.name}
        </p>
        <p>
          <b>Email:</b> {userInfo.email}
        </p>
        <p>
          <b>Phone Number:</b> {userInfo.phone}
        </p>
      </div>
      <div className="editDeleteIcon">
        <Link to={"/delete"} state={{ userDelete: userInfo }}>
          <i
            className="trash alternate outline icon iconSpace"
            style={{ color: "red", marginTop: "7px" }}
          ></i>
        </Link>
        <Link to={`/edit/${userInfo.id}`} state={{ userUpdate: userInfo }}>
          <i
            className="edit alternate outline icon iconSpace"
            style={{ color: "red", marginTop: "7px" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
