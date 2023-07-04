import { useState } from "react";

const useTodoListItem = (todoItem, onUpdate) => {
  const [isModify, setIsModify] = useState(false);
  const [todoText, setTodoText] = useState(todoItem.todo);

  const handleClickModify = () => {
    setIsModify(!isModify);
  };

  const handleClickCancel = () => {
    setIsModify(!isModify);
  };

  const handleModifyInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmitModify = () => {
    onUpdate(todoText);
    setIsModify(false);
  };

  return {
    isModify,
    todoText,
    handleClickModify,
    handleClickCancel,
    handleModifyInputChange,
    handleSubmitModify,
  };
};

export default useTodoListItem;
