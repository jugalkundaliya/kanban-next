import React from "react";
import { Label, Required, Wrapper } from "./style";

const InputContainer = ({ label, children, required }: any) => {
  return (
    <Wrapper>
      <Label>
        {label}
        {required && <Required>*</Required>}
      </Label>
      {children}
    </Wrapper>
  );
};

export default InputContainer;
