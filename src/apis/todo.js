import { axiosInstance } from "./instance";

export const createTodo = async (todo) => {
  try {
    const response = await axiosInstance.post("/todos", {
      todo,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get("/todos");
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (todo) => {
  try {
    const response = await axiosInstance.put(`/todos/${todo.id}`, {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axiosInstance.delete(`/todos/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};
