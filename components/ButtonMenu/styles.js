import styled from 'styled-components';

export const Container = styled.button`
  max-width: 126px;
  background-color: #000;
  border: none;
  padding: 20px 0;
  margin-left: 6px;
  cursor: pointer;
  outline: none;
  font-family: Helvetica;
  text-decoration: none;
  color: #fff;
  fill: #fff;

  display: flex;
  align-items: center;

  p {
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      padding-top: 4px;
      font-size: 16px;
      &:hover {
        color: #1ed760;
      }
    }
  }

  img {
    border-radius: 50%;
    margin: auto 6px auto 10px;
    box-shadow: 0 0 5px 2px rgb(0 0 0 / 10%);
    object-fit: cover;
    height: 40px;
    width: 40px;
    box-sizing: boder-box;
    display: inline-block;
  }

  div {
    display: flex;
    align-items: center;
    margin: 8px 0;

    span {
      font-size: 16px;
      margin: auto 0 auto 12px;
      font-weight: 700;
    }

    svg {
      margin-left: 10px;
      height: 12px;
      width: 12px;
      transform: ${(props) =>
        props.isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
  }
  &:hover {
    fill: #1ed760;

    span {
      color: #1ed760;
    }
  }
`;
