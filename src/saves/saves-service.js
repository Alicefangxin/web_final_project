import axios from "axios";

// const USERS_URL = 'http://localhost:4000/users'
const SAVES_URL = 'http://localhost:4000/saves'

export const userSavesProf = async (save) => {
    const response = await axios.post(`${SAVES_URL}`, save)
    return response.data
}