import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center bg-[#f2f2f2] w-screen h-screen">
      <div className="bg-[#c7c7c7] p-4 rounded-lg w-fit">
        <div className="text-center">
          <h3>Login Page</h3>
        </div>
        <div className="grid">
          <label className="my-1">Email</label>
          <input type="text" className="p-1 rounded-lg my-1 outline-none" placeholder="Enter Email" name="" id="" />
        </div>
        <div className="grid">
          <label className="mt-2">Password</label>
          <input type="password" className="p-1 rounded-lg my-1 border-none outline-none" placeholder="Enter Password" name="" id="" />
        </div>
        <div className="pt-3">
          <button className="py-2 bg-green-800 hover:bg-green-700 text-white w-full rounded-lg">Login</button>
        </div>
        <div className="float-right">
          <Link className="no-underline" onClick={() => navigate("/signup")}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
