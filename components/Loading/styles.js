import styled from 'styled-components';

export const Container = styled.div`
  background: #121212;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-top: 4px solid;
  border-color: #fff transparent;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(359deg);
    }
  }
`;
