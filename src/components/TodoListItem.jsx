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

function TodoListItem({ todo, onClickCheckBox }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [modifyTodo, setModifyTodo] = useState(todo.todo);

  const handleClickModify = () => {
    setIsModify(!isModify);
  };

  const handleClickDelete = () => {
    deleteTodo(todo.id)
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
    setModifyTodo(event.target.value);
  };

  const handleSubmitModify = (event) => {
    const newTodo = {
      ...todo,
      todo: modifyTodo,
    };
    updateTodo(newTodo)
      .then((res) => {
        console.log(res);
        alert("수정 완료");
      })
      .catch((err) => {
        console.log(err);
        alert("수정 실패");
      });
    setIsModify(!isModify);
  };

  return isDeleted ? (
    <></>
  ) : (
    <TodoListItemWrapper>
      <TodoListItemLabel>
        <input
          type="checkbox"
          onChange={onClickCheckBox}
          checked={todo.isCompleted}
        />
        {isModify ? (
          <input
            style={{ margin: "0 8px" }}
            data-testid="modify-input"
            value={modifyTodo}
            onChange={handleModifyInputChange}
            autoFocus
          />
        ) : (
          <span style={{ margin: "0 8px" }}>{modifyTodo}</span>
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
          onClick={isModify ? handleClickModify : handleClickDelete}
        />
      </TodoListController>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
