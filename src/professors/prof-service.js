import axios from "axios"

const api = "https://rateprof-backend.herokuapp.com/professors"

export const getProfessors = async (name, university) => {
    console.log(name, university)
    const resp = await axios.get(api, {params: {name: name, university: university}});
    console.log(resp.data);
    return resp.data;
};