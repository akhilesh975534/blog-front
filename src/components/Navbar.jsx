import React from "react";
import { FaListAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const userinfo = sessionStorage.getItem("userInfo");
  const user = JSON.parse(userinfo);
  console.log(user,"user++++++++++")

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-zinc-700 text-white px-4 py-3">
      <div>
        <h1>Blogger</h1>
      </div>
      <div className="">
        <ul className="md:flex md:justify-between hidden">
          <li className="mx-3">
            <Link className="text-white no-underline" to="/index">
              Home
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-white no-underline" to="/create-blog">
              Create Blog
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-white no-underline" to="/about">
              About
            </Link>
          </li>
          <li className="mx-3">
            <Link className="text-white no-underline" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <div
          className="flex justify-start items-center space-x-3 bg-[lightgray] text-black rounded-lg px-4 py-1 dropdown-toggle"
          data-bs-toggle="dropdown"
        >
          <span className="bi bi-person-circle"></span>
          <p className="text-lg">{user.username}</p>
        </div>
        <ul class="dropdown-menu">
          <li>
            <button class="dropdown-item" onClick={() => navigate("/profile")}>
              Profile
            </button>
          </li>
          <li>
            <button
              class="dropdown-item"
              onClick={() => navigate("/forget-password")}
            >
              Forget Password
            </button>
          </li>
          <li>
            <button class="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <FaListAlt className="text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
