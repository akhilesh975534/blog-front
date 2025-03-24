import axiosInstense from "../lib/axiosInstanse";

class blogModel {
  async createPost(data = {}) {
    return await axiosInstense.post("/api/v1/blogs/create-blog", data);
  }

  async getPostData() {
    return await axiosInstense.get("/api/v1/blogs");
  }

  async deletePost(id) {
    return await axiosInstense.delete("/api/v1/blogs/" + id);
  }
}

export default new blogModel();
