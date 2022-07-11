import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class SaveContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      gender: "",
      error: null,
    };
  }

  formSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.gender === ""
    ) {
      toast.error("All Fields are Required", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      return;
    } else {
      toast.success("Contact Saved", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    this.props.saveContactHandler(this.state);
    this.setState({ name: "", email: "", phone: "", gender: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2 id="contact-heading">Save Contact Details</h2>
        <form className="ui form" onSubmit={this.formSubmit}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              pattern="^[A-Za-z]+$"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              placeholder="Phone"
              pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <select
              value={this.state.gender}
              onChange={(e) => this.setState({ gender: e.target.value })}
              placeholder="Choose your gender"
            >
              <option value="" />
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="ui button red">Create Contact</button>
          <Link to="/">
            <button className="ui button red">Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SaveContacts;
