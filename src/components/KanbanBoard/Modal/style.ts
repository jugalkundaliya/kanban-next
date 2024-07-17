import styled from "styled-components";

export const Title = styled.div`
  font-weight: 600;
  font-size: 34px;
  color: #000000;
  text-align: center;
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #000000;
  margin-bottom: 8px;
`;

export const Required = styled.span`
  color: red;
`;

export const Wrapper = styled.div`
  input,
  .ant-select {
    height: 40px;
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 15px;
`;

export const Buttons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 30px;
  > * {
    height: 44px;
    border: none;
  }
  button:first-child {
    background-color: #f9f9f9;
    color: #696969;
    font-weight: 700;
  }
  button:last-child {
    background-color: #559ae3;
    color: #ffffff;
    font-weight: 700;
  }
`;
