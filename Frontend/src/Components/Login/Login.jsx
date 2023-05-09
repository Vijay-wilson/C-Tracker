import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import styles from "./styles.module.css";
import "./Login.css";
import Navbar from "../Home/Navbar";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  let role = ["admin", "user"];
  const navigate = useNavigate();

  const login_api_call = async (email, password, role) => {
    const response = await fetch("http://localhost:3005/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password, role: role }),
    });
    const json = await response.json();
    console.log(json);
    console.log(json.status);
    if (json.status == "success") {
      if (json.data[0].email === "admin@gmail.com") {
        localStorage.setItem("token", json.token);
        navigate("/requirementdisplay");
        toast.success("login Successfully");
      } else {
        localStorage.setItem("token", json.token);
        
      

        navigate("/user");
      }
    } else {
      toast.error("invalid credentials");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      credentials.email === "admin@gmail.com" &&
      credentials.role === "admin"&&
      credentials.password==="1234"
    ) {
      // login_api_call(credentials.email, credentials.password, credentials.role);
      navigate("/requirementdisplay");
    } else if (
      credentials.email !== "admin@gmail.com" &&
      credentials.role !== "admin"&&
      credentials.password !== "1234"
    ) {
      login_api_call(credentials.email, credentials.password, credentials.role);
    } else {
      alert("Please Check Your Credentials or User Type");
    }
  };

  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="background-image">
      <Navbar />
      <div className="container1" style={{ marginTop: "15%" }}>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <form onSubmit={handleSubmit}>
              <h2 className="heading1">Login to Your Account</h2>
              <p className="section1">to continue</p>
              <select
                className="form-select form-select-lg"
                required={true}
                id="role"
                name="role"
                value={credentials.role}
                onChange={onChange}
                style={{ backgroundColor: "aliceblue", fontWeight: "500" }}
              >
                <option defaultValue>Select Role</option>
                <option value="admin">Admin</option>
                {/* <option value="user">User</option> */}
                <option value="user">Faculty</option>
              </select>

              <label htmlFor="" className="form-label">
                Email
              </label>

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                required
                className="form-control"
              />

              <label htmlFor="" className="form-label">
                Password
              </label>

              <input
                type="password"
                placeholder="Password"
                name="password"
                // value={credentials.password}
                onChange={onChange}
                required
                className="form-control"
              />
              <button class="btn btn-primary"  type="submit">
                Log in
              </button>
            </form>
            <Link
              to="/signup"
              className="linktosignin"
              style={{ textDecoration: "none" }}
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
