import axiosInstense from "../lib/axiosInstanse";

class blogModel {
  async createPost(data = {}) {
    return await axiosInstense.post("/api/v1/blogs/create-blog", data);
  }

  async getPostData() {
    return await axiosInstense.get("/api/v1/blogs");
  }

  async specificPost(id) {
    return await axiosInstense.get("/api/v1/blogs/" + id);
  }

  async updatePost(data, id) {
    // console.log(id,"------------------")
    // console.log(data,"+++++++++++++++")
    return await axiosInstense.put("/api/v1/blogs/update-blog/" + id, data);
  }

  async deletePost(id) {
    return await axiosInstense.delete("/api/v1/blogs/" + id);
  }
}

export default new blogModel();
