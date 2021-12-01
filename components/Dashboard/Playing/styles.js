import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #181818;
  grid-area: now-playing-bar;
  width: 100%;
  z-index: 4;

  @media (max-width: 900px) {
    height: ${(props) => (props.isActive ? '145px' : '96px')};
  }
`;
