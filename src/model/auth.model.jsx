import axiosInstense from "../lib/axiosInstanse"

class authModel {
    async loginUser(data) {
        console.log(data,"data+++++++++++++++")
        return await axiosInstense.post("/api/v1/users/login", data)
    }
}

export default new authModel()