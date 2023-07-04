import React from "react";
import { styled } from "styled-components";
import BtnBox from "./BtnBox";
import useTodoListItem from "../hooks/useTodoListItem";

function TodoListItem({ todoItem }) {
  const {
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
  } = useTodoListItem(todoItem);

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

export default TodoListItem;
