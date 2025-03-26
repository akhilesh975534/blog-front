import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogModel from "../../model/blog.model";
import helper from "../../lib/helper";

function Show() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);



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

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Show Blog</h2>
      <form >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData?.title}
            disabled
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <textarea
            name="des"
            disabled
            value={formData?.des}
            className="w-full p-2 border rounded mt-1 h-40"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/index")}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default Show;
