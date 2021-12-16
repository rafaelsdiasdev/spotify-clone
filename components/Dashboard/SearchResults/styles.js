import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 440px auto;
  gap: 24px;
  margin-top: 16px;
  padding: 0 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  min-width: 100%;

  @media (max-width: 900px) {
    display: none;
  }

  .content__title {
  }
`;

export const Tracks = styled.section`
  .tracks__title {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const TitleContent = styled.div`
  margin-bottom: 16px;
`;

export const TitleText = styled.h2`
  color: #fff;
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 28px;
  text-transform: none;
`;
