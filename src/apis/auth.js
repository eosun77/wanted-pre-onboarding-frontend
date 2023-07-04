import { axiosInstance } from "./instance";

// signup
export const signup = async (email, password) => {
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
export const signin = async (email, password) => {
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
