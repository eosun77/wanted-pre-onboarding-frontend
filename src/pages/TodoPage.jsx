import React from "react";
import { styled } from "styled-components";
import TodoListItem from "../components/TodoListItem";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import useTodo from "../hooks/useTodo";

function TodoPage() {
  const { todoInput, todoList, handleCreateTodo, handleTodoInputChange } =
    useTodo();

  return (
    <TodoWrapper>
      <TodoHeader>To Do List</TodoHeader>
      <TodoInput>
        <InputLine
          label="Todo"
          margin="0px"
          id="new-todo-input"
          value={todoInput}
          onChange={handleTodoInputChange}
        />
        <BtnBox
          width="104px"
          label="추가"
          id="new-todo-add-button"
          onClick={handleCreateTodo}
        />
      </TodoInput>

      <TodoList>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todoItem={todo} />
        ))}
      </TodoList>
    </TodoWrapper>
  );
}

const TodoWrapper = styled.div`
  padding: 0 32px;
  text-align: center;
`;

const TodoHeader = styled.div`
  font-size: 32px;
  margin-block: 36px;
  font-weight: bold;
`;

const TodoList = styled.ul`
  max-width: 480px;
  padding: 0;
  margin: auto;
`;

const TodoInput = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  margin: 32px auto;
`;

export default TodoPage;
