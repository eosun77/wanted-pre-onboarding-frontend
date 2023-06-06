import React from "react";
import { styled } from "styled-components";

const Btn = styled.button`
  max-width: 320px;
  width: 100%;
  height: 48px;
  font-size: 16px;
  background-color: ${(props) =>
    props.disabled ? "var(--darkgray-color)" : "var(--main-color)"};
  color: white;
  border-radius: 8px;
  border: 0;
  :hover {
    background-color: #3a3a3a;
  }
`;

function BtnBox({ label, id, onClick, disabled }) {
  return (
    <Btn data-testid={id} onClick={onClick} disabled={disabled}>
      {label}
    </Btn>
  );
}

export default BtnBox;
