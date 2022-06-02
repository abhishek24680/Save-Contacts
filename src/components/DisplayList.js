import React from "react";
import DisplayCard from "./DisplayCard";

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

  return <div className="ui celled list">{showData}</div>;
};

export default DisplayList;
