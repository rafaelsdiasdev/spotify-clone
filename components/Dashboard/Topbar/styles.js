import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main-view;

  height: 60px;
  min-width: 0;
  /* width: 100%; */
  background-color: #121212;
  padding: 0 32px;

  @media (max-width: 900px) {
    display: ${(props) => (props.search ? 'flex' : 'none')};
    background-color: rgb(51, 51, 51);
    height: 48px;
    padding: 0;
    z-index: 9999;
    position: fixed;
  }

  .nav-search {
    display: none;

    margin-bottom: 8px;
    position: fixed;
    z-index: 1;

    align-items: center;
    height: 48px;
    width: 100%;
    flex-direction: row;
    background-color: rgb(51, 51, 51);

    button {
      padding: 10px 12px;

      background: rgb(51, 51, 51);
      border: 0px;
      touch-action: manipulation;

      svg {
        fill: '#fff';
        color: '#fff';
      }
    }

    form {
      flex-grow: 1;

      input {
        background-color: rgb(51, 51, 51);
        width: 100%;
        color: #fff;
      }
    }

    @media (max-width: 900px) {
      display: flex;
      width: 100%;
    }
  }

  header {
    display: flex;
    /* grid-template-columns: 96px auto 115px; */
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    @media (max-width: 900px) {
      display: none;
    }

    .nav-container {
      display: flex;
      align-items: center;
      flex-direction: row;

      .arrows {
        display: flex;
      }

      .search {
        flex: 0 1 364px;
        position: relative;
        display: ${(props) => (props.search ? 'flex' : 'none')};
        input {
          border: 0;
          border-radius: 500px;
          color: #000;
          height: 40px;
          text-overflow: ellipsis;
          width: 346px;
          padding: 6px 48px;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 16px;
          text-transform: none;
        }

        .bloom {
          align-items: center;
          bottom: 0;
          display: flex;
          left: 12px;
          pointer-events: none;
          position: absolute;
          right: 12px;
          top: 0;
        }
      }
    }

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
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: #282828;
      }

      figure {
        width: 28px;
        height: 28px;

        display: inline-block;
        position: relative;
        margin: 0;

        div {
          width: 28px;
          height: 28px;
          inset-inline-start: 0px;

          img {
            border-radius: 50%;
            height: 100%;

            width: 100%;
          }
        }
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

      svg {
        margin-inline-end: 6px;
        height: 16;
        width: 16;
      }
    }

    .menu-container {
      display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
      z-index: 9999;
      position: absolute;
      inset: 0px 0px auto auto;

      margin: 0px;
      transform: translate(-32px, 54px);

      pointer-events: auto;
      white-space: nowrap;

      .menu-context {
        border: 0;
        margin: 0;
        padding: 0;
        vertical-align: baseline;

        .menu {
          min-width: 196px;

          border: 0;
          margin: 0;
          padding: 0;
          vertical-align: baseline;

          ul {
            list-style: none;
            background-color: #282828;
            border-radius: 4px;

            box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
            max-height: calc(100vh - 24px);
            max-width: 350px;
            min-width: 160px;
            overflow-y: auto;
            padding: 4px;

            border: 0;
            /* margin: 0; */
            vertical-align: baseline;

            li {
              border: 0;
              margin: 0;
              padding: 0;
              vertical-align: baseline;

              pointer-events: auto;
              white-space: nowrap;

              button {
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
              }
            }
          }
        }
      }
    }
  }
`;
