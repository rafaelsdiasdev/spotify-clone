import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh; // 100%
  position: relative;
  isolation: isolate;
  width: 100%;
  /* z-index: 0; */
  .top-container {
    display: grid;
    grid-template-areas:
      'nav-bar main-view main-view'
      'now-playing-bar now-playing-bar now-playing-bar';
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
    height: 100%;
    min-height: 100%;
    position: relative;
    width: 100%;
  }
`;
