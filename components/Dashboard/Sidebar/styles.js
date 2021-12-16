import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #000;
  grid-area: nav-bar;
  width: calc(232px + 9px);
  z-index: 3;

  @media (max-width: 900px) {
    grid-area: now-playing-bar;
    width: 100%;
    z-index: 9999;
    position: fixed;
    bottom: 0;
    background-color: rgb(51, 51, 51);
  }
`;

export const Content = styled.div`
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

  .content__logo {
    padding-top: 0;

    @media (max-width: 900px) {
      display: none;
    }

    .link {
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
`;

export const List = styled.ul`
  list-style: none;
  display: block;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;
