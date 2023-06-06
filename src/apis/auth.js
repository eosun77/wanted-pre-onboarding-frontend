import { axiosInstance } from "./instance";

// signup
export const createAuth = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/signup", {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// signin
export const readAuth = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
