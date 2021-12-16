import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
  position: absolute;
`;

export const List = styled.ul`
  border-radius: 3px;

  position: relative;
  inset: 6px 0px auto auto;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  list-style: none;
  padding: 10px 16px;
  margin: 0;
  box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
  min-width: 160px;
  animation: fadein 0.3s;

  &::before {
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    position: relative;
    inset: -26px -86px auto auto;
    border-bottom: 16px solid #fff;
    content: '';
    display: block;
    height: 0;
    width: 0;
    box-sizing: border-box;

    @media (max-width: 900px) {
      display: none;
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 900px) {
    background-color: #000;
    padding: 38px;
    width: 100vw;
    border-radius: 0px;
    right: calc(100% - 123px);
  }
`;

export const ListItem = styled.li`
  width: 100%;
  font-size: 16px;
  font-family: Helvetica;
  padding: 4px 0px 3px;
  font-weight: normal;
  display: block;
  line-height: 1.5;
  color: #919496;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  top: -8px;

  @media (max-width: 900px) {
    font-size: 28px;
  }

  &:first-child {
    color: #000;

    @media (max-width: 900px) {
      color: #919496;
    }
  }

  &:hover {
    color: #1ed760;
  }
`;
