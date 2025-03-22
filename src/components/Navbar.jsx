import React from "react";
import { FaListAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-zinc-700 text-white px-4 py-3">
      <div>
        <h1>Blogger</h1>
      </div>
      <div className="">
        <ul className="md:flex md:justify-between hidden">
          <li className="mx-3">
            <Link className="text-white no-underline" to="/">
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
      <div className="md:flex md:justify-between hidden">
        <button
          className="mx-2 bg-green-800 hover:bg-green-700 py-1 px-3 rounded-lg hover:text-black"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="mx-2 bg-red-800 hover:bg-red-700 py-1 px-3 rounded-lg"
          onClick={() => navigate("/signup")}
        >
          SignUp
        </button>
      </div>
      <div className="md:hidden">
        <FaListAlt className="text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
