import axios from 'axios';
import queryString from 'query-string';
import { apiConfig } from './apiConfig';

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,

  paramsSerializer: (params) =>
    queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
