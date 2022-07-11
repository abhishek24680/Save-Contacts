import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DeleteContacts = (props) => {
  const location = useLocation();
  const { userDelete } = location.state;
  const history = useNavigate();
  console.log(history);
  const deleteContact = () => {
    props.removeContact(userDelete.id);
    history("/");
  };
  return (
    <div className="main">
      <h2>{`Are you sure you want to delete ${userDelete.name} from your contacts?`}</h2>
      <div>
        <button className="ui button red" onClick={deleteContact}>
          Yes
        </button>
        <Link to="/">
          <button className="ui button red">No</button>
        </Link>
      </div>
    </div>
  );
};

export default DeleteContacts;
