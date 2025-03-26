import axiosInstense from "../lib/axiosInstanse"

class authModel {
    async loginUser(data) {
        console.log(data,"data+++++++++++++++")
        return await axiosInstense.post("/api/v1/users/login", data)
    }

    async signupUser(data) {
        return await axiosInstense.post("/api/v1/users/create-user", data)
    }
}

export default new authModel()