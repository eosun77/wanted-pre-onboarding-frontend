import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TodoListItem from "../components/TodoListItem";
import InputLine from "../components/InputLine";
import BtnBox from "../components/BtnBox";
import { createTodo, getTodos, updateTodo } from "../apis/todo";

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

function TodoPage() {
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
      })
      .catch((err) => {
        console.log(err);
        alert("추가 실패");
      });
  };

  const handleClickCheckBox = (todo) => {
    const newTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
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

    const todoId = todo.id;
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === todoId) {
        return newTodo;
      }
      return todo;
    });

    setTodoList(updatedTodoList);
  };

  return (
    <TodoWrapper>
      <TodoHeader>To Do List</TodoHeader>
      <TodoInput>
        <InputLine
          label="Todo"
          margin="0px"
          id="new-todo-input"
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
          <TodoListItem
            key={todo.id}
            todo={todo}
            onClickCheckBox={() => handleClickCheckBox(todo)}
          />
        ))}
      </TodoList>
    </TodoWrapper>
  );
}

export default TodoPage;
