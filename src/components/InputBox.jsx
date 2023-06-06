import React from "react";
import { styled } from "styled-components";

const InputBoxWrapper = styled.div`
  text-align: start;
  max-width: 320px;
  margin: auto;
  margin-bottom: 32px;
`;

const InputBoxLabel = styled.div`
  font-size: 14px;
  color: var(--darkgray-color);
  margin-bottom: 14px;
`;

const InputBoxInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
`;

function InputBox({ label, id, onChange, type }) {
  return (
    <InputBoxWrapper>
      <InputBoxLabel>{label}</InputBoxLabel>
      <InputBoxInput
        data-testid={id}
        onChange={onChange}
        type={type}
      ></InputBoxInput>
    </InputBoxWrapper>
  );
}

export default InputBox;
