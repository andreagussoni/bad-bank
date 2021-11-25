import React from 'react';
import Card from "./context";
import { UserContext } from './context'
import { UserListContext } from './context'


function Login() {
  const { user, setUser } = React.useContext(UserContext);
  const [status, setStatus] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {userList, setUserList } = React.useContext(UserListContext)


  function handleLogin() {
    if (userList.hasOwnProperty([email])) {
      if(password == userList[email]['password']){
        setUser(email)
        setStatus('')
      } else {
        setStatus('Wrong password')
        alert('wrong password')
      }
    } else {
      setStatus('ERROR not an user')
      alert('not an user')
    }
  }
    

  function clearForm() {
    setEmail("");
    setPassword("");
    setUser(null)
    console.log(user)
    }

  return (
    <Card
      bgcolor="info"
      header="Login"
      status={status}
      body={
        !user ? (
          <>
            email
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
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogin}
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              LogOut
            </button>
          </>
        )
      }
    />
  );
}

export default Login;