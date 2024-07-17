import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 44px;
  line-height: 66px;
`;

export const SearchContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    left: 20px;
    top: 14px;
  }
  margin-left: 97px;
`;

export const SearchInput = styled.input`
  width: 297px;
  height: 40px;
  border: 1px solid rgba(151, 151, 151, 0.36);
  border-radius: 5px;
  padding-left: 40px;
`;

export const PeopleContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 33px;
`;

export const CreateTaskButton = styled.button`
  background: #fa8503;
  border: 1px solid rgba(255, 255, 255, 0.36);
  border-radius: 5px;
  font-size: 10px;
  color: #ffffff;
  font-family: "__Poppins_e04c4e", "__Poppins_Fallback_e04c4e";
  width: 124px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: auto;
`;
