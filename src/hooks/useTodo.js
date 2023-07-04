import { useEffect, useState } from "react";
import { createTodo, getTodos } from "../apis/todo";

const useTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => {
        console.log(res);
        setTodoList(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert("To Do List를 불러오는데 실패했습니다.");
      });
  }, []);

  const handleTodoInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  const handleCreateTodo = () => {
    createTodo(todoInput)
      .then((res) => {
        console.log(res);
        alert("추가 완료");
        setTodoList([...todoList, res.data]);
        setTodoInput("");
      })
      .catch((err) => {
        console.log(err);
        alert("추가 실패");
      });
  };

  return {
    todoInput,
    todoList,
    handleTodoInputChange,
    handleCreateTodo,
  };
};

export default useTodo;
