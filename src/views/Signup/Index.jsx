import React from "react";
import { useNavigate } from "react-router-dom";
import helper from "../../lib/helper";
import authModel from "../../model/auth.model";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData, "++++++++++++++++");
    if (
      e.target.name.value !== "" &&
      e.target.email.value !== "" &&
      e.target.username.value !== "" &&
      e.target.password.value !== "" &&
      e.target.mobileNo.value !== ""
    ) {
      try {
        await authModel.signupUser(formData).then((res) => {
          if (res) {
            console.log(res, "res+++++++++++++++");
            helper.toast("success", res?.data?.message)
            navigate("/login")
          }
        });
      } catch (error) {
        console.log(error, "error+++++++++++++");
        helper.toast("error", error?.response?.message);
      }
    } else {
      helper.toast("error", "All fields are required");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Mobile No</label>
            <input
              type="tel"
              name="mobileNo"
              className="w-full p-2 border rounded mt-1"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
