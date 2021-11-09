import styled from 'styled-components';

export const Container = styled.header`
  background-color: #000;
  .content {
    max-width: 1170px;
    margin: 0 auto;
    //position: relative;
    display: grid;
    grid-template-columns: 130px 1fr;
    font-family: Helvetica;
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    justify-items: end;

    .logo {
      display: flex;
      align-items: center;
    }
  }
`;
