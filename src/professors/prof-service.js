import axios from "axios";

const REACT_API_BASE_URL = process.env.REACT_API_BASE_URL;

export const getProfessors = async (name, university) => {
  const resp = await axios.get(`${REACT_API_BASE_URL}/professors`, {
    params: { name: name, university: university },
  });
  return resp.data;
};

export const searchProfessors = async (name, university) => {
  const resp = await axios.get(`${REACT_API_BASE_URL}/searchprofessors`, {
    params: { name: name, university: university },
  });
  return resp.data;
};
