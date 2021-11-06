import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  top: 12px;
  margin: 2px 0 0;

  .account-menu {
    border-radius: 3px;

    top: 72px;
    right: -18px;

    /* opacity: 0; */
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background-color: #fff;
    list-style: none;
    padding: 10px 16px;
    margin: 0;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 20%);
    min-width: 160px;
    position: absolute;

    /* &.active {
      opacity: 1;
      visibility: visible;
    } */

    &::before {
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      right: 7px;
      border-bottom: 16px solid #fff;

      content: '';
      display: block;
      position: absolute;
      height: 0;
      width: 0;
      top: -12px;

      box-sizing: border-box;
    }

    .account-menu-item {
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

      &:first-child {
        color: #000;
      }

      &:hover {
        color: #1ed760;
      }
    }
  }
`;
