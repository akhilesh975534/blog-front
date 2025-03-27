import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogModel from "../../model/blog.model";
import helper from "../../lib/helper";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  console.log(formData, "formData--------------");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getBlogData = async () => {
    await blogModel
      .specificPost(id)
      .then((result) => {
        if (result) {
          setFormData(result?.data?.blog);
        }
      })
      .catch((error) => {
        console.log(error, "error+++++++++++++");
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.title.value !== "" && e.target.des.value !== "") {
      await blogModel
        .updatePost(formData, id)
        .then((result) => {
          if (result) {
            console.log(result, "++++++++++++");
            helper.toast("success", result?.data?.message);
            navigate(-1);
          }
        })
        .catch((error) => {
          console.log(error, "error++++++++++++++");
          helper.toast("error", error?.response?.data?.message);
        });
    } else {
      helper.toast("error", "All fields are required");
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData?.title}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="des"
            value={formData?.des}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1 h-40"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default EditBlog;
