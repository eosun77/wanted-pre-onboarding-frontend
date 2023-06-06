import React from "react";
import { styled } from "styled-components";
import BtnBox from "./BtnBox";

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
  return (
    <TodoListItemWrapper>
      <TodoListItemLabel>
        <input
          type="checkbox"
          onChange={onClickCheckBox}
          checked={todo.isCompleted}
        />
        <span style={{ margin: "0 8px" }}>{todo.todo}</span>
      </TodoListItemLabel>
      <TodoListController>
        <BtnBox width="48px" label="수정" id="modify-button" />
        <BtnBox width="48px" label="삭제" ghost="true" id="delete-button" />
      </TodoListController>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
