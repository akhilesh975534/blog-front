import axiosInstense from "../lib/axiosInstanse";

class profileModel {
  async getProfile(id) {
    return await axiosInstense.get("/api/v1/profile/" + id);
  }
}

export default new profileModel();
