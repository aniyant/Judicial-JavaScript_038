import axios from 'axios';

const API_URL = 'https://judicial-javascript-038-dock.onrender.com/api/execute';

const executeCode = async (file) => {
  try {
    const response = await axios.post(API_URL, file);
    return response.data.output;
  } catch (error) {
    return error.response?.data?.message || error.message;
  }
};

export { executeCode };
