import axios from "axios";

const baseUrl =
  "http://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default () => {
  return axiosInstance.get("");
};
