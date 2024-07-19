import axios from 'axios';

const API_URL = 'http://localhost:4500/api/files';

const getFiles = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const createFile = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, fileData, config);
  return response.data;
};

const renameFile = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/rename`, fileData, config);
  return response.data;
};

const deleteFile = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/delete`, {
    headers: config.headers,
    data: fileData,
  });

  return response.data;
};

const updateFileContent = async (fileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/${fileData._id}`, fileData, config);
  return response.data;
};


const fileService = {
  getFiles,
  createFile,
  renameFile,
  deleteFile,
  updateFileContent
};

export default fileService;
