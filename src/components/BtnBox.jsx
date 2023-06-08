import React from "react";
import { styled } from "styled-components";

const Btn = styled.button`
  max-width: ${(props) => (props.width ? props.width : "320px")};
  color: ${(props) => (props.ghost ? "var(--main-color)" : "white")};
  width: 100%;
  height: 48px;
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled
      ? "var(--darkgray-color)"
      : props.ghost
      ? "white"
      : "var(--main-color)"};
  border: ${(props) => (props.ghost ? "1px solid var(--main-color)" : 0)};
  border-radius: 8px;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? "var(--darkgray-color)" : "var(--main-color-hover)"};
    color: white;
  }
`;

function BtnBox({ label, id, onClick, disabled, width, ghost }) {
  return (
    <Btn
      data-testid={id}
      onClick={onClick}
      disabled={disabled}
      width={width}
      ghost={ghost}
    >
      {label}
    </Btn>
  );
}

export default BtnBox;
