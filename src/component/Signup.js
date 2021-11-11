import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    alert(firstName + lastName + email + password);
  };
  return (
    <>
      <h1> Sign up </h1>
      <input
        placeholder="FirstName"
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <input
        placeholder="LastName"
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginLeft: "6px" }}
      ></input>
      <br />
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />
      <br />
      <button onClick={signup}>Sign up</button>
    </>
  );
};
export default Signup;
