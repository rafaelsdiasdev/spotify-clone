import styled from 'styled-components';

export const Container = styled.div`
  background-color: #181818;
  grid-area: now-playing-bar;
  width: 100%;
  z-index: 4;

  @media (max-width: 900px) {
    height: ${(props) => (props.isActive ? '140px' : '90px')};
  }
`;
