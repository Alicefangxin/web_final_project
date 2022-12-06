import axios from "axios";

const TEMP_PROF_BASE = "http://localhost:4000/tempProfs";

// const TEMP_PROF_BASE = "https://rateprof-backend.herokuapp.com";

export const findAllProfs = async () => {
  const response = await axios.get(`${TEMP_PROF_BASE}`);
  const profs = response.data;
  return profs;
};

export const findProfById = async (profID) => {
  const response = await axios.get(`${TEMP_PROF_BASE}/${profID}`);
  return response.data;
};

export const findProfByName = async (profName) => {
  const response = await axios.get(`${TEMP_PROF_BASE}/${profName}`)
  return response.data
}
