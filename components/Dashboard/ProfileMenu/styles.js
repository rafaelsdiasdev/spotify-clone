import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const BtnMenu = styled.div`
  .button {
    background-color: ${(props) =>
      props.isMenuOpen ? '#282828' : 'rgba(0, 0, 0, 0.7)'};
    border: 0;
    border-radius: 23px;
    color: #fff;
    cursor: pointer;
    gap: 8px;
    height: 32px;
    margin-inline-start: 16px;
    padding: 2px;
    padding-right: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #282828;
    }

    img {
      border-radius: 50%;
    }
    span {
      line-height: 28px;
      max-width: 110px;
      overflow: hidden;
      pointer-events: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;

      font-size: 14px;
      font-weight: 700;
      letter-spacing: normal;
      text-transform: none;
    }
  }
`;

export const MenuContainer = styled.div`
  display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
  z-index: 9999;
  position: absolute;
  inset: 0px -32px auto auto;

  margin: 0px;
  transform: translate(-32px, 54px);

  pointer-events: auto;
  white-space: nowrap;
`;

export const MenuContext = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const Menu = styled.div`
  min-width: 196px;
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const List = styled.ul`
  list-style: none;
  background-color: rgb(51, 51, 51);
  border-radius: 4px;

  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  max-height: calc(100vh - 24px);
  max-width: 350px;
  min-width: 160px;
  overflow-y: auto;
  padding: 4px;

  border: 0;
  vertical-align: baseline;
`;

export const ListItem = styled.li`
  border: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;

  pointer-events: auto;
  white-space: nowrap;
`;

export const Button = styled.button`
  width: 100%;
  font-family: Helvetica, arial, sans-serif;
  background: rgb(51, 51, 51);
  border: 0;
  border-radius: 2px;
  color: rgba(255, 255, 255, 0.9);
  cursor: default;
  text-decoration: none;

  align-items: center;

  display: flex;
  gap: 8px;
  height: 40px;
  justify-content: space-between;
  padding: 12px;
  padding-inline-end: 8px;
  position: relative;
  text-align: start;

  user-select: none;

  span {
    flex: 1;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 16px;
    text-transform: none;
  }

  svg {
    color: #fff;
    fill: #fff;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
