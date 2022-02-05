import axios from "../plugins/axios.js"


class UserServices {
    getUsers() {
        return axios.get("/data")
    }
}

export default new UserServices();