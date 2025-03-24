import React, { useEffect, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus, FaRegEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import blogModel from "../../model/blog.model";
const BaseUrl = process.env.REACT_APP_API_URL;
// console.log(BaseUrl, "++++++++++");

const Home = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts[0]);
  const navigate = useNavigate();

  const getBlogData = async () => {
    await blogModel
      .getPostData()
      .then((result) => {
        if (result) {
          // console.log(result,"++++++++++++")
          setPosts(result?.data?.blogs);
        }
      })
      .catch((error) => {
        console.log(error, "error+++++++++");
      });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (result.isConfirmed) {
      await blogModel
        .deletePost(id)
        .then((result) => {
          if (result) {
            console.log(result, "++++++++++++++");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        })
        .catch((error) => {
          console.log(error, "++++++++++++++++");
        });
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center my-2">
        <h1 className="text-3xl font-bold mb-4">My Blog</h1>
        <button
          className="bg-green-800 hover:bg-green-700 flex justify-between items-center px-4 text-white text-xl rounded-lg py-2 space-x-2"
          onClick={() => navigate("/create-blog")}
        >
          <FaPlus />
          <span>Create</span>
        </button>
      </div>
      <div className="space-y-4 w-full">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="p-4 border rounded-lg shadow flex justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.des}</p>
            </div>
            <div className="grid">
              <button
                className="m-2 hover:text-blue-400 active:text-red-400"
                onClick={() => navigate(`/blog/${post._id}`)}
              >
                <FaRegEye />
              </button>
              <button
                className="m-2 hover:text-blue-400 active:text-red-400"
                onClick={() => navigate(`/blog/edit-blog/${post._id}`)}
              >
                <BsPencilSquare />
              </button>
              <button
                className="m-2 hover:text-blue-400 active:text-red-400"
                onClick={() => handleDelete(post._id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
