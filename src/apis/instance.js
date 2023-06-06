import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `https://www.pre-onboarding-selection-task.shop`,
  headers: {
    "Content-type": "application/json",
  },
});
