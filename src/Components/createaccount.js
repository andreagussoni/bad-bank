import React from "react";
import Card from "./context";
import { UserContext } from "./context";
import { UserListContext } from "./context";
import { Movements } from "./context";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userList, setUserList } = React.useContext(UserListContext);
  const { movements, setMovements } = React.useContext(Movements);

  //email validation regex
  function validateEmail(email) {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  function handleCreate() {
    if (name.length > 0) {             //check name
      if (validateEmail(email)) {      // check email
        if (password.length >= 8) {    //check password
          const newObject = {          // copy existing users and add validated account
            ...userList,
            [email]: { name, email, password, balance: 100 },
          };
          const newObject2 = { ...movements, [email]: [] }; // create array to contain movements for every account created
          setMovements(newObject2);
          console.log(movements);
          setUserList(newObject);
          setStatus('')
          setShow(false);             //change card display
          alert('Succes, account created')
        } else {
          setStatus("password must be longer than 8 characters");
        }
      } else {
        setStatus("not an email");
      }
    } else {
      setStatus("insert name");
    }
    
  }

  function clearForm() {    //reset form
    setName("");
    setPassword("");
    setEmail("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={name.length > 0 && email.length > 0 && password.length > 0 ? false : true}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Succes</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
