import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    background: #000;
    font-family: Helvetica;
    font-size: 16px;

    li {
      padding: 33px 17px;
      font-weight: 700;

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #1ed760;
        }
      }
    }

    li:nth-child(4) {
      padding: 0;
    }

    li:last-child {
      padding: 0;
      margin: 0;
      position: relative;
    }
  }
`;
