import "./App.css";
import Header from "./components/Header";
import SaveContacts from "./components/SaveContacts";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import DisplayList from "./components/DisplayList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const STORAGE_KEY = "Saved Contacts";
  const [contacts, setContact] = useState([]);

  const saveContactHandler = (contact) => {
    setContact([...contacts, { id: uuidv4(), ...contact }]);
  };

  //storing contacts to localstorage
  useEffect(() => {
    const showContacts = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (showContacts) setContact(showContacts);
  }, []);

  //getting the contacts from localstorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // delete contact function and update new available contact data list
  const removeContact = (id) => {
    const newDisplayList = contacts.filter((currVal) => {
      return currVal.id !== id;
    });
    setContact(newDisplayList);
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <DisplayList contacts={contacts} removeContact={removeContact} />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/add"
            element={<SaveContacts saveContactHandler={saveContactHandler} />}
          />
        </Routes>
      </Router>
      {/* <Header />
      <SaveContacts saveContactHandler={saveContactHandler} />
      <DisplayList contacts={contacts} removeContact={removeContact} /> */}
    </div>
  );
}

export default App;
