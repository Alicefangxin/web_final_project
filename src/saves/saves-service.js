import axios from "axios";

const PROFS_URL = 'http://localhost:4000/tempProfs'
const SAVES_URL = 'http://localhost:4000/saves'
const USERS_URL = 'http://localhost:4000/users'

export const userSavesProf = async (save) => {
    const response = await axios.post(`${SAVES_URL}`, save)
    return response.data
}

export const userUnsavesProf = async (username, profID) => {
    const response = await axios.delete(`${USERS_URL}/${username}/unsaves/${profID}`)
    return response.data
}

export const findUsersWhoSavedProf = async (profID) => {
    const response = await axios.get(`${PROFS_URL}/profID/saves`)
    return response.data
}