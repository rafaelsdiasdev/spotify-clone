import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #000;
  grid-area: nav-bar;
  width: calc(232px + 9px);
  z-index: 3;

  @media (max-width: 900px) {
    /* display: none; */
    grid-area: now-playing-bar;
    width: 100%;
    z-index: 9999;
    position: fixed;
    bottom: 0;
    background-color: rgb(51, 51, 51);
    /* height: 100px; */
  }

  .active-menu {
    color: #fff;
    fill: #fff;
    background-color: #282828;

    @media (max-width: 900px) {
      color: #fff;
      fill: #fff;
      background-color: rgb(51, 51, 51);
    }
  }

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 0;
    width: 100%;
    padding-top: 24px;

    @media (max-width: 900px) {
      display: inline-flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
    }

    .logo {
      padding-top: 0;

      @media (max-width: 900px) {
        display: none;
      }

      a {
        margin-bottom: 20px;
        padding: 0 24px;
        text-decoration: none;

        @media (max-width: 900px) {
          margin-bottom: 0;
        }

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

      @media (max-width: 900px) {
        display: flex;
        justify-content: space-around;
        width: 100%;
      }

      li {
        display: list-item;
        padding: 0 8px;

        @media (max-width: 900px) {
          display: inline-flex;
          justify-content: space-around;
          width: 100%;
        }

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
      }
    }
  }
`;
