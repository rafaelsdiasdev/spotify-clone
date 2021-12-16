import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main-view;

  height: 80px;
  min-width: 0;
  background-color: #121212;
  padding: 24px 32px;

  @media (max-width: 900px) {
    display: ${(props) => (props.search ? 'flex' : 'none')};
    background-color: rgb(51, 51, 51);
    height: 48px;
    padding: 0;
    z-index: 9999;
    position: fixed;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Arrows = styled.div`
  display: flex;
`;

export const MobileTopbar = styled.div`
  display: none;

  margin-bottom: 8px;
  position: fixed;
  z-index: 1;

  align-items: center;
  height: 48px;
  width: 100%;
  flex-direction: row;
  background-color: rgb(51, 51, 51);

  input {
    background-color: rgb(51, 51, 51);
    width: 100%;
    color: #fff;
  }

  @media (max-width: 900px) {
    display: flex;
    width: 100%;
  }
`;

export const ActionButton = styled.button`
  padding: 10px 12px;

  background: rgb(51, 51, 51);
  border: 0px;
  touch-action: manipulation;

  svg {
    fill: '#fff';
    color: '#fff';
  }
`;
