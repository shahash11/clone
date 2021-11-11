import { useHistory } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const history = useHistory();

  const profileClicked = () => {
    alert("Profile clicked");
  };

  //   const login = () => {
  //     history.push("/home");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    alert(email + password);
    history.push("/home");
  };

  return (
    <>
      <h2>Login Page</h2>
      <div>
        <div
          style={{
            backgroundColor: "blue",
            width: "30%",
            height: "250px",
            marginTop: "50%",
            float: "left",
          }}
        >
          <h3>Facebook </h3>
          <h3> Recent login </h3>
          <div
            style={{ backgroundColor: "white", width: "50%" }}
            onClick={profileClicked}
          >
            <p>Shahash</p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "blue",
            width: "30%",
            height: "220px",
            marginTop: "50%",
            float: "right",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "100px",
              width: "200px",
              margin: "40px 10px 10px 10px",
            }}
          >
            <input
              placeholder={"enter email"}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <input
              placeholder={"enter password"}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br />
            <br />

            <button onClick={login}>Login</button>
          </div>

          <a href="#" style={{ color: "white" }}>
            {" "}
            Forgot password{" "}
          </a>
          <br />
          <br />
          <button onClick={() => history.push("/signup")}>
            Create new account
          </button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Login;
