import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const baseUrl = process.env.REACT_APP_API_URL;

function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    des: "",
  });
  const [blogs, setBlogs] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    console.log(formData, "++++++++++++++++");
    await axios
      .post(baseUrl + "/api/v1/blogs/create-blog", formData)
      .then((res) => {
        if (res) {
          console.log(res, "res++++++++++++");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: res?.data?.message
          });
        }
      })
      .catch((error) => {
        console.log(error, "error++++++++++++++++");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error?.response?.data?.message
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className=" p-3 rounded-lg bg-blue-300 w-fit">
        <div className="grid w-fit ">
          <h1 className="text-2xl font-bold pb-3 text-center border-b-2">
            Create a Blog
          </h1>
          <form onSubmit={handleAddBlog}>
            <div className="grid w-full">
              <label className="my-2 font-bold">Enter Your Title</label>
              <input
                type="text"
                className="p-1 rounded-lg outline-none w-full"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div className="grid w-full">
              <label className="my-2 font-bold">Enter Your Content</label>
              <textarea
                className="p-1 rounded-lg outline-none w-full"
                name="des"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="my-2">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 rounded-lg w-full py-1"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
