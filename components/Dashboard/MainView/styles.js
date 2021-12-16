import styled from 'styled-components';

export const Container = styled.main`
  grid-area: main-view;
  margin-top: 80px;
  width: 100%;
  background-color: #121212;

  @media (max-width: 900px) {
    margin-top: ${(props) => (props.search ? '48px' : '0')};
    padding-top: 1rem;
  }
`;
