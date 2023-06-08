import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://www.pre-onboarding-selection-task.shop`,
  headers: {
    "Content-type": "application/json",
  },
});

const accessToken = localStorage.getItem("accessToken");

if (accessToken) {
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
}
