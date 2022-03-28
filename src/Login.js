import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("/api/auth/login", {
      email,
      password,
    });
    console.log(data);
    localStorage.setItem("info", JSON.stringify(data.encodedToken));
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
