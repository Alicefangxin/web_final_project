import axios from "axios"

const base_api = "https://rateprof-backend.herokuapp.com"

export const getProfessors = async (name, university) => {
    const resp = await axios.get(`${base_api}/professors`, {params: {name: name, university: university}});
    return resp.data;
};

export const searchProfessors = async (name, university) => {
    const resp = await axios.get(`${base_api}/searchprofessors`, {params: {name: name, university: university}});
    return resp.data;
};