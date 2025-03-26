import React from "react";
import Swal from "sweetalert2";
import blogModel from "../../model/blog.model";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      if (e.target.title.value !== "" && e.target.des.value !== "") {
        await blogModel
          .createPost(formData)
          .then((res) => {
            if (res) {
              // console.log(res, "res++++++++++++");
              Swal.fire({
                icon: "success",
                title: "Success",
                text: res?.data?.message,
              });
              navigate(-1)
            }
          })
          .catch((error) => {
            console.log(error, "error++++++++++++++++");
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error?.response?.data?.message,
            });
          });
      } else {
        console.log("Required all fields");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold text-center mb-4">Create Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="des"
            className="w-full p-2 border rounded mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
}

export default CreateBlog;
