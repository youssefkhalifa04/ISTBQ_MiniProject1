import React from "react";
import { useContext, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Signup } from "./components/Login/Signup.jsx";

import { Settings } from "./components/header/settings/Settings.jsx";
export const Context = React.createContext();
function App() {
  const [user, setUser] = useState("");
  return (
    <Context.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
