import styled from 'styled-components';

export const Container = styled.button`
  display: block;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  padding: 14px 32px;
  border-radius: 500px;
  cursor: pointer;

  a {
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    color: #2941ab;
    font-family: Helvetica;
    letter-spacing: 2px;
    font-weight: 700;

    &:hover {
      background-color: #2de26d;
      font-size: calc(14px + 9%);
    }

    &:focus {
      outline: 1.5px solid #fff;
      border: 2px solid #000;
    }
  }
`;
