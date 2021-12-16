import styled from 'styled-components';

export const Container = styled.li`
  display: list-item;
  padding: 0 8px;

  @media (max-width: 900px) {
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
  }

  .link {
    color: #b3b3b3;
    align-items: center;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    gap: 16px;
    height: 40px;
    padding: 0 16px;
    text-decoration: none;
    fill: #b3b3b3;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    line-height: 16px;

    &.active-menu {
      color: #fff;
      fill: #fff;
      background-color: #282828;

      @media (max-width: 900px) {
        color: #fff;
        fill: #fff;
        background-color: rgb(51, 51, 51);
      }
    }

    @media (max-width: 900px) {
      width: 100%;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      gap: 5px;

      span {
        font-size: 11px;
      }
    }

    &:hover {
      color: #fff;
      fill: #fff;
    }
  }
`;
