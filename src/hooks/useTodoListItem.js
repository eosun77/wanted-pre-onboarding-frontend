import { useState } from "react";
import { deleteTodo, updateTodo } from "../apis/todo";

const useTodoListItem = (todoItem) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isModify, setIsModify] = useState(false);

  const [todo, setTodo] = useState(todoItem.todo);
  const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted);

  const [temp, setTemp] = useState("");

  const handleClickModify = () => {
    setTemp(todo);
    setIsModify(!isModify);
  };

  const handleClickCancel = () => {
    setIsModify(!isModify);
    setTodo(temp);
  };

  const handleClickDelete = () => {
    deleteTodo(todoItem.id)
      .then((res) => {
        console.log(res);
        alert("삭제 완료");
        setIsDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        alert("삭제 실패");
      });
  };

  const handleModifyInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmitModify = () => {
    const newTodo = {
      ...todoItem,
      todo: todo,
    };
    updateTodo(newTodo)
      .then((res) => {
        console.log(res);
        alert("수정 완료");
        setIsModify(!isModify);
      })
      .catch((err) => {
        console.log(err);
        alert("수정 실패");
      });
  };

  const handleClickCheckBox = () => {
    const newTodo = {
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    };
    updateTodo(newTodo)
      .then((res) => {
        console.log(res);
        alert("수정 완료");
        setIsCompleted(!isCompleted);
      })
      .catch((err) => {
        console.log(err);
        alert("수정 실패");
      });
  };

  return {
    isDeleted,
    isModify,
    todo,
    isCompleted,
    handleClickModify,
    handleClickCancel,
    handleClickDelete,
    handleModifyInputChange,
    handleSubmitModify,
    handleClickCheckBox,
  };
};

export default useTodoListItem;
