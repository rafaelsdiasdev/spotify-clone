import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 32%;
  bottom: 40%;
  opacity: ${(props) => props.show ? 1: 0};
  z-index: 2;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.06);
  }

  button {
    cursor: pointer;
    background-color: #1db954;
    color: #fff;
    border-radius: 500px;
    height: 40px;
    width: 40px;
    border: none;
  }
`;
