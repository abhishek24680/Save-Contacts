import "./App.css";
import Header from "./components/Header";
import SaveContacts from "./components/SaveContacts";
import EditContacts from "./components/EditContacts";
import api from "./config/ApiConfig";
import DeleteContacts from "./components/DeleteContacts";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import DisplayList from "./components/DisplayList";
import UserInfo from "./components/UserInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [contacts, setContact] = useState([]);

  const saveContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const res = await api.post("http://localhost:9000/savedContacts", request);
    setContact([...contacts, res.data]);
  };

  const getContacts = async () => {
    const res = await api.get("http://localhost:9000/savedContacts");
    return res.data;
  };

  //getting the contacts
  useEffect(() => {
    const getContactData = async () => {
      const showAllContacts = await getContacts();
      if (showAllContacts) setContact(showAllContacts);
    };
    getContactData();
  }, []);

  // delete contact function and update new available contact data list
  const removeContact = async (id) => {
    await api.delete(`http://localhost:9000/savedContacts/${id}`);
    const newDisplayList = contacts.filter((currVal) => {
      return currVal.id !== id;
    });
    setContact(newDisplayList);
  };

  const updateContactHandler = async (contactToUpdate) => {
    const { name, email, phone, gender, id } = contactToUpdate;
    const request = {
      name: name,
      email: email,
      phone: phone,
      gender: gender,
    };
    const res = await api.put(
      `http://localhost:9000/savedContacts/${contactToUpdate.id}`,
      request
    );
    setContact(
      contacts.map((c) => {
        return c.id === id ? { ...res.data } : c;
      })
    );
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<DisplayList contacts={contacts} />} />
          <Route
            path="/add"
            element={<SaveContacts saveContactHandler={saveContactHandler} />}
          />
          <Route path="/view/:id" element={<UserInfo />} />
          <Route
            path="/edit/:id"
            element={
              <EditContacts updateContactHandler={updateContactHandler} />
            }
          />
          <Route
            path="/delete"
            element={<DeleteContacts removeContact={removeContact} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
