import React, { useState } from "react";
import { styled } from "styled-components";
import BtnBox from "./BtnBox";
import { deleteTodo, updateTodo } from "../apis/todo";

const TodoListItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  list-style-type: none;
  line-height: 48px;
  text-align: start;
  margin: 16px 0;
`;

const TodoListItemLabel = styled.label`
  width: calc(100% - 120px);
  height: 100%;
  border-radius: 16px;
  padding: 0 16px;
  border: 1px solid var(--black-color);
`;

const TodoListController = styled.div`
  display: flex;
  justify-content: space-between;
  width: 112px;
  margin-left: 8px;
`;

function TodoListItem({ todoItem }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [todo, setTodo] = useState(todoItem.todo);
  const [isCompleted, setIsCompleted] = useState(todoItem.isCompleted);
  const [temp, setTemp] = useState(todoItem.todo);

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

  const handleSubmitModify = (event) => {
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

  return isDeleted ? (
    <></>
  ) : (
    <TodoListItemWrapper>
      <TodoListItemLabel>
        <input
          type="checkbox"
          onChange={handleClickCheckBox}
          checked={isCompleted}
        />
        {isModify ? (
          <input
            style={{ margin: "0 8px" }}
            data-testid="modify-input"
            value={todo}
            onChange={handleModifyInputChange}
            autoFocus
          />
        ) : (
          <span style={{ margin: "0 8px" }}>{todo}</span>
        )}
      </TodoListItemLabel>
      <TodoListController>
        <BtnBox
          width="48px"
          label={isModify ? "제출" : "수정"}
          id={isModify ? "submit-button" : "modify-button"}
          onClick={isModify ? handleSubmitModify : handleClickModify}
        />
        <BtnBox
          width="48px"
          label={isModify ? "취소" : "삭제"}
          ghost="true"
          id={isModify ? "cancel-button" : "delete-button"}
          onClick={isModify ? handleClickCancel : handleClickDelete}
        />
      </TodoListController>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
