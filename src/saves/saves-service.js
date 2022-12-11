import axios from "axios";

const PROFS_URL = 'https://rateprof-backend.herokuapp.com/profs'
const SAVES_URL = 'https://rateprof-backend.herokuapp.com/saves'
const USERS_URL = 'https://rateprof-backend.herokuapp.com/users'

export const userSavesProf = async (save) => {
    const response = await axios.post(`${SAVES_URL}`, save)
    return response.data
}

export const userUnsavesProf = async (username, profID) => {
    const response = await axios.delete(`${USERS_URL}/${username}/unsaves/${profID}`)
    return response.data
}

export const findUsersWhoSavedProf = async (profID) => {
    const response = await axios.get(`${PROFS_URL}/${profID}/saves`)
    return response.data
}

export const findProfsSavedByUser = async (username) => {
    const response = await axios.get(`${USERS_URL}/${username}/saves`)
    return response.data
}
