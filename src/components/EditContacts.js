import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const EditContacts = (props) => {
  const location = useLocation();
  console.log(location);
  const { userUpdate } = location.state;
  const [name, setName] = useState(userUpdate.name);
  const [email, setEmail] = useState(userUpdate.email);
  const [phone, setPhone] = useState(userUpdate.phone);
  const [gender, setGender] = useState(userUpdate.gender);
  const [id, setId] = useState(userUpdate.id);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || gender === "") {
      toast.error("All Fields are Required", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    } else {
      toast.success("Contact Updated", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    props.updateContactHandler({ name, email, phone, gender, id });
    console.log({ name, email, phone, gender, id });
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
  };

  return (
    <div className="ui main">
      <h2 id="contact-heading">Edit</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            pattern="^[A-Za-z]+$"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone</label>
          <input
            type="text"
            placeholder="Phone"
            pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Choose your gender"
          >
            <option value="" />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        {userUpdate.name === name &&
        userUpdate.email === email &&
        userUpdate.phone === phone &&
        userUpdate.gender === gender ? (
          <button className="ui button red" disabled>
            Update Contact
          </button>
        ) : (
          <button className="ui button red">Update Contact</button>
        )}
        <Link to="/">
          <button className="ui button red">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default EditContacts;
