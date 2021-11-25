import React from "react";

import "./App.css";
import CreateAccount from "./Components/createaccount";
import AllData from "./Components/alldata";
import { Routes, HashRouter, Route } from "react-router-dom";
import Home from "./Components/home";
import NavBar from "./Components/navbar";
import Withdraw from "./Components/withdraw";
import Deposit from "./Components/deposit";
import Login from "./Components/login";
import { UserContext } from "./Components/context";
import { UserListContext } from "./Components/context";
import { Movements } from "./Components/context";

function App() {
  const [user, setUser] = React.useState(null);
  const [movements, setMovements] = React.useState({['iamironman@avengers.com']:[]});
  const [userList, setUserList] = React.useState({
    "iamironman@avengers.com": {
      name: "tony",
      email: "iamironman@avengers.com",
      password: "hulk",
      balance: 1000000000,
    },
  });

  return (
    <HashRouter>
      <NavBar />
      <Movements.Provider value={{ movements, setMovements }}>
        <UserListContext.Provider value={{ userList, setUserList }}>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/" exact='true' element={<Home />} />
              <Route path="/CreateAccount/" exact='true' element={<CreateAccount />} />
              <Route path="/login/" exact='true' element={<Login />} />
              <Route path="/deposit/" exact='true' element={<Deposit />} />
              <Route path="/withdraw/" exact='true' element={<Withdraw />} />
              <Route path="/alldata/" exact='true' element={<AllData />} />
            </Routes>
          </UserContext.Provider>
        </UserListContext.Provider>
      </Movements.Provider>
    </HashRouter>
  );
}

export default App;
