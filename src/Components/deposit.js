import React from "react";
import Card from "./context";
import { UserContext } from "./context";
import { UserListContext } from "./context";
import { Movements } from "./context"

function Deposit() {
  const { user, setUser } = React.useContext(UserContext);
  const { userList, setUserList } = React.useContext(UserListContext);
  const [deposit, setDeposit] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const { movements, setMovements } = React.useContext(Movements)
  

  

  function handleDeposit() {
    const temp = user;
    if (deposit >= 0) {
      userList[temp]["balance"] += deposit;
      console.log(userList[temp]["balance"]);
      setDeposit(0)
      movements[temp].push(`deposited: ${deposit}`)
      console.log(movements[temp])
      setStatus("Deposit successful");
    } else {
      setStatus("Insert positive number");
      alert("error: not positive");
    }
  }

  return (
    <Card
      bgcolor="success"
      header="Deposit"
      status={status}
      body={
        user ? (
          <>
            Balance: {userList[user]["balance"]}$
            <input
              type="number"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit"
              value={deposit}
              onChange={(e) => setDeposit(Number(e.currentTarget.value))}
            />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleDeposit}
              disabled={deposit >= 0 ? false : true}
            >
              Confirm
            </button>
          </>
        ) : (
          <>Please select account</>
        )
      }
    />
  );
}

export default Deposit;
