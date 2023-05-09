import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import "../Login/Login.css";
import Navbar from "../Home/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = (data) => console.log(data);
  const signUpData = () => {
    console.log(data);
    axios
      .post("http://localhost:3005/signup", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status == "success") {
          navigate("/login");
          let token = response.data.token;
          sessionStorage.setItem("token", token);
          alert("user registered successfully");
          setData({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          });
        }
        alert(response.data.message || response.data.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };
console.log(data);
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setData((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  };

  return (
    <div className="background-image">

      <div className="container1" style={{ marginTop: "5%" }}>
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="heading1">Sign up</h2>
            {/* <p className='section1'>to continue</p> */}
            <form
              onSubmit={handleSubmit(signUpData)}
              className={styles.form_container}
            >
              <label htmlFor="" className="form-label">
                {" "}
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                {...register("firstName", { required: true })}
                onChange={inputHandler}
                value={data.firstName}
                // className={styles.input}
              />
              {/* <error>
                {errors.firstName?.type === "required" &&
                  "First name is required"}
              </error> */}
              <label htmlFor="" className="form-label">
                {" "}
                LastName
              </label>
              <input
                id="name"
                name="lastName"
                type="text"
                className="form-control"
                {...register("lastName", { required: true })}
                onChange={inputHandler}
                value={data.lastName}
                // className={styles.input}
              />
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
				placeholder="Email"
							{...register("email", {
							required: true,
							pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
							})}
							onChange={inputHandler}
							value={data.email}
              />
              <span
                style={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                {" "}
              </span>{" "}
              <br />
              <label htmlFor="" className="form-label">
                Username
              </label>
              <input
              type="text"
							placeholder="Username"
							{...register("username",{required: true})}	
							name="username"
							onChange={inputHandler}
							value={data.username}
                className="form-control"
              />
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
							placeholder="Password"
							{...register("password", {
								required: true,
								minLength: 5,
								maxLength: 10,
							})}
							name="password"
							onChange={inputHandler}
							value={data.password}
                className="form-control"
              />
              <label htmlFor="" className="form-label">
                Confirm Password
              </label>
              <input
              type="password"
							placeholder="Confirm Password"
							{...register("confirmPassword", {
								required: true,
								minLength: 5,
								maxLength: 10,
							})}
							name="confirmPassword"
							onChange={inputHandler}
							value={data.confirmPassword}
                className="form-control"
              />
              <button className="btn btn-primary" type="submit">
                Sign up
              </button>
            </form>
            <Link
              to="/login"
              className=""
              style={{ textDecoration: "none" }}
            >
              Have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
