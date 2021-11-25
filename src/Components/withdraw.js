import React from "react";
import Card, { Movements } from "./context";
import { UserContext } from "./context";
import { UserListContext } from "./context";


function Withdraw() {
  const { user, setUser } = React.useContext(UserContext);
  const { userList, setUserList } = React.useContext(UserListContext);
  const [withdraw, setWithdraw] = React.useState(0);
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(true);
  const { movements, setMovements } = React.useContext( Movements )

  function handleWithdraw() {
    const temp = user;
    if (withdraw > userList[temp]['balance']){
      alert('Too much!')
      return
    }
    if (withdraw >= 0) {
      movements[temp].push(`withdrew: ${withdraw}`)
      userList[temp]["balance"] -= withdraw;
      console.log(userList[temp]["balance"]);
      setWithdraw(0)
      setStatus("withdraw successful");
    } else {
      setStatus("Insert positive number");
      alert("error: not positive");
    }
  }

  

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={
        user ? (
          <>
            Balance: {userList[user]["balance"]}$
            <input
              type="number"
              className="form-control"
              id="withdraw"
              placeholder="Enter withdraw"
              value={withdraw}
              onChange={(e) => setWithdraw(Number(e.currentTarget.value))}
            />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleWithdraw}
              disabled={withdraw > 0 ? false : true}
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

export default Withdraw;
