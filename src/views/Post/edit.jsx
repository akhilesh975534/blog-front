import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const BaseUrl = process.env.REACT_APP_API_URL;

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [formData, setFormData] = useState({
    title: "",
    des: "",
  });

  console.log(formData,"formdata++++++++++++")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getBlogData = async () => {
    await axios
      .get(BaseUrl + "/api/v1/blogs/" + id)
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
    await axios
      .put(BaseUrl + "/api/v1/blogs/update-blog/" + id, formData)
      .then((result) => {
        if (result) {
          console.log(result, "++++++++++++");
          navigate(-1);
        }
      })
      .catch((error) => {
        console.log(error, "error++++++++++++++");
      });
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
            value={formData?.title}
            name="title"
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            value={formData?.des}
            name="des"
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
