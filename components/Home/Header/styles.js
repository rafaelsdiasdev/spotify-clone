import styled from 'styled-components';

export const Container = styled.header`
  background-color: #000;
`;

export const Content = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 130px 1fr;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  justify-items: end;
  height: 82px;
  align-items: center;

  @media (max-width: 1200px) {
    max-width: 1080px;
    padding: 0 1.2rem;
  }

  .logo {
    display: flex;
    align-items: center;
  }
`;
