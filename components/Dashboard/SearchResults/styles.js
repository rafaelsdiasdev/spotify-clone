import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 440px auto;
  gap: 24px;
  margin-top: 16px;
  padding: 0 32px;

  section {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    min-width: 100%;

    .top-results-title {
      div {
        margin-bottom: 16px;
        h2 {
          color: #fff;
          display: inline-block;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 28px;
          text-transform: none;
        }
      }
    }

    .tracks-title {
      div {
        margin-bottom: 16px;
        h2 {
          color: #fff;
          display: inline-block;
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 28px;
          text-transform: none;
        }
      }
    }
  }
`;
