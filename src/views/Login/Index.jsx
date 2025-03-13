import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BaseUrl = process.env.REACT_APP_API_URL;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // console.log(formData, "++++++++++++");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      // console.log(formData,"+++++++++++++++++++")
      await axios
        .post(BaseUrl + "/api/v1/users/login", formData)
        .then((result) => {
          if (result) {
            console.log(result, "result++++++++++++");
            sessionStorage.setItem("token", result?.data?.token);
            sessionStorage.setItem("userInfo", JSON.stringify(result?.data?.user))
            navigate("/index")
          }
        })
        .catch((error) => {
          console.log(error, "++++++++++++++++");
        });
    } else {
      console.log("Enter Email and passwords");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#f2f2f2] w-screen h-screen">
      <div className="bg-[#c7c7c7] p-4 rounded-lg w-fit">
        <div className="text-center">
          <h3>Login Page</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <label className="my-1">Email</label>
            <input
              type="text"
              className="p-1 rounded-lg my-1 outline-none"
              placeholder="Enter Email"
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="grid">
            <label className="mt-2">Password</label>
            <input
              type="password"
              className="p-1 rounded-lg my-1 border-none outline-none"
              placeholder="Enter Password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="pt-3">
            <button className="py-2 bg-green-800 hover:bg-green-700 text-white w-full rounded-lg">
              Login
            </button>
          </div>
        </form>
        <div className="float-right">
          <Link className="no-underline" onClick={() => navigate("/signup")}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
