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
