import React from "react";
import DisplayCard from "./DisplayCard";
import { Link } from "react-router-dom";

const DisplayList = (props) => {
  const showData = props.contacts?.map((contactData) => {
    return <DisplayCard propsToChild={contactData} key={contactData.id} />;
  });

  return (
    <div className="main">
      <div className="myContacts">
        <h2>My Contacts</h2>
        <Link to="/add">
          <button className="ui button red right">Add Contact</button>
        </Link>
      </div>
      {showData &&
        (showData.length > 0 ? (
          <div className="ui celled list">{showData}</div>
        ) : (
          <div className="emptyDescription">
            Your contact list is empty. Add a contact to display on your screen.
          </div>
        ))}
    </div>
  );
};

export default DisplayList;
