import styled from 'styled-components';

export const ResultsContainer = styled.div``;

export const NoResultsContainer = styled.div`
  margin-top: 16px;
  padding: 0 32px;
`;

export const CardContainer = styled.section`
  font-family: Helvetica, arial, sans-serif;
  color: #fff;
  width: 100%;
  .top {
    width: 100%;

    .top-container {
      margin-bottom: 16px;
      display: grid;
      grid-template-columns: 1fr 60px;

      .title {
        h2 {
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 28px;
          text-transform: none;
        }
      }
    }

    a {
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 16px;
      text-transform: uppercase;
      color: #fff;
    }
  }

  .card-container {
    display: flex;
    gap: 24px;
  }
`;
