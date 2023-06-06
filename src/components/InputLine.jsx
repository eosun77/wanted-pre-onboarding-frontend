import React from "react";
import { styled } from "styled-components";

const InputLineWrapper = styled.div`
  text-align: start;
  max-width: 360px;
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : "0 auto 32px")};
`;

const InputLineLabel = styled.div`
  font-size: 14px;
  color: var(--darkgray-color);
  margin-bottom: 14px;
`;

const InputLineInput = styled.input`
  width: 100%;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
`;

function InputLine({ label, id, onChange, type, margin }) {
  return (
    <InputLineWrapper margin={margin}>
      <InputLineLabel>{label}</InputLineLabel>
      <InputLineInput
        data-testid={id}
        onChange={onChange}
        type={type}
      ></InputLineInput>
    </InputLineWrapper>
  );
}

export default InputLine;
