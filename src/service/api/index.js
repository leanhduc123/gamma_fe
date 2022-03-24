import * as axios from 'axios';

console.log(document.querySelector('meta[name="csrf-token"]').content);

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  headers: {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const regist = (params) => {
  return axiosInstance.post('/api/register', params);
};

export const login = (params) => {
  return axiosInstance.post('/api/login', params);
};

export const createPj = (params) => {
  return axiosInstance.post('/api/project', params);
};

export const simulate = (params) => {
  return axiosInstance.put('/api/simulate', params);
};
