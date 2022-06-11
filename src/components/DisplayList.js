import React from "react";
import DisplayCard from "./DisplayCard";
import { Link } from "react-router-dom";

const DisplayList = (props) => {
  const deleteContact = (id) => {
    props.removeContact(id);
  };

  const showData = props.contacts.map((contactData) => {
    return (
      <DisplayCard
        propsToChild={contactData}
        deleteContact={deleteContact}
        key={contactData.id}
      />
    );
  });

  return (
    <div class="main">
      <div className="myContacts">
        <h2>My Contacts</h2>
        <Link to="/add">
          <button className="ui button red right">Add Contact</button>
        </Link>
      </div>
      <div className="ui celled list">{showData}</div>
    </div>
  );
};

export default DisplayList;
