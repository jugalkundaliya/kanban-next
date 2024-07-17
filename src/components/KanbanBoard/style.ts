import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 55px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  width: 324px;
  background: #f9f9f9;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
`;

export const ColumnHeader = styled.span`
  font-weight: 500;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #666666;
  border-radius: 4px;
  width: calc(100% - 16px);
`;

export const Chip = styled.div<{ variant: string }>`
  padding: 4px 8px;

  background: ${({ variant }) =>
    variant === "success"
      ? "#b8ebb0"
      : variant === "warning"
      ? "#F0CA81"
      : "#DE1D3E"};
  border-radius: 20px;

  font-size: 10px;
  color: #221c1d;
  display: flex;
  align-items: center;
  width: max-content;
`;

export const CardDesc = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #221c1d;
`;

export const DateContainer = styled.div`
  font-size: 11px;
  color: #666666;
`;

export const UserImageContainer = styled.div`
  margin-left: auto;
`;

export const AddCardContainer = styled.div`
  font-weight: 500;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #000000;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000047;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 340px;
  background: #ffffff;
  border-radius: 5px;
  padding: 25px 30px;
  height: max-content;
`;
