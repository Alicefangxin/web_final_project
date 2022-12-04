import axios from 'axios';

const TEMP_PROF_BASE = "http://localhost:4000";

export const findAllProfs = async () => {
    const response = await axios.get(`${TEMP_PROF_BASE}/tempProfs`);
    const profs = response.data;
    return profs;
};

export const findProfById =  async (pid) => {
    const response = await axios.get(`${TEMP_PROF_BASE}/tempProfs/${pid}`);
    return response.data;
};