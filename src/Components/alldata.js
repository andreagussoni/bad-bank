import React from "react";
import Card from "./context";
import { UserListContext } from "./context";
import { UserContext } from "./context";
import { Movements } from "./context";

function AllData() {
  const { user, setUser } = React.useContext(UserContext);
  const { movements, setMovements } = React.useContext(Movements);
  const { userList, setUserList } = React.useContext(UserListContext);

  // get handle of current user and accounts created
  const temp = user;
  const entries = Object.entries(userList);

  return (
    <Card
      header="Users list and Movements"
      bgcolor="dark"
      body={
        user ? (
          <>
            Log out to see all users
            <br/>
            <br/>
            {movements[temp].length > 0 ? (
            <>
            - User ID: {temp}
            <br/>
            - Current balance: {userList[temp]['balance']}
            {movements[temp].map((element, key) => (
              <li value={key}>{element}</li>
            ))}
            </>
            ):(
              <>
              user ID: {temp}
              No movements
              </>
            )
            }
          </>
        ) : (
          <>
            Please select account to show movements
            <br />
            <br />
            {entries.map((element, key) => (
              <ul value={key}>
                <li value={key}>
                  {element[0]}:
                  <ul>
                    <li value={key}>password: {element[1]["password"]}</li>
                    <li value={key}>blanace: {element[1]["balance"]} </li>
                  </ul>
                </li>
              </ul>
            ))}
          </>
        )
      }
    />
  );
}

export default AllData;
