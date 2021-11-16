import styled from 'styled-components';

export const Container = styled.button`
  margin-right: 16px;
  padding: 0;
  width: 32px;
  display: inline-flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;

  svg {
    height: 22px;
    opacity: 1;
    width: 22px;
    stroke-width: 1pt;
    cursor: pointer;
  }
`;
