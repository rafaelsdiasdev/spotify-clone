import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #000;
  grid-area: nav-bar;
  width: calc(232px + 9px);
  z-index: 3;

  @media (max-width: 900px) {
    display: none;
  }

  .active-menu {
    color: #fff;
    fill: #fff;
    background-color: #282828;
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
    width: 100%;
    padding-top: 24px;

    .logo {
      padding-top: 0;

      a {
        margin-bottom: 20px;
        padding: 0 24px;
        text-decoration: none;

        svg {
          height: 40px;
          max-width: 131px;
          width: 100%;
        }
      }
    }

    ul {
      list-style: none;
      display: block;

      li {
        display: list-item;
        padding: 0 8px;

        a {
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

          &:hover {
            color: #fff;
            fill: #fff;
          }
        }
      }
    }
  }
`;
