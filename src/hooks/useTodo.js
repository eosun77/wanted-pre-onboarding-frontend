import { useEffect, useState } from "react";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../apis/todo";

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

  const onDelete = (id) => {
    deleteTodo(id)
      .then((res) => {
        console.log(res);
        alert("삭제 완료");
        setTodoList(todoList.filter((todo) => todo.id !== id));
      })
      .catch((err) => {
        console.log(err);
        alert("삭제 실패");
      });
  };

  const onUpdate = (updatedTodo) => {
    updateTodo(updatedTodo)
      .then((res) => {
        console.log(res);
        setTodoList(
          todoList.map((todo_1) =>
            todo_1.id === updatedTodo.id ? updatedTodo : todo_1
          )
        );
        alert("수정 완료");
      })
      .catch((err) => {
        console.log(err);
        alert("수정 실패");
      });
  };

  return {
    todoInput,
    todoList,
    handleTodoInputChange,
    handleCreateTodo,
    onDelete,
    onUpdate,
  };
};

export default useTodo;
