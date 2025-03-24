import React from "react";
import Swal from "sweetalert2";
import blogModel from "../../model/blog.model";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const navigate = useNavigate()

  const handleAddBlog = async (e) => {
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
              />
            </div>
            <div className="grid w-full">
              <label className="my-2 font-bold">Enter Your Content</label>
              <textarea
                className="p-1 rounded-lg outline-none w-full"
                name="des"
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
