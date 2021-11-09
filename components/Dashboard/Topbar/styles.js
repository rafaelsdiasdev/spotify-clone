import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main-view;

  height: 60px;
  min-width: 0;
  width: 100%;
  background-color: #121212;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  input {
    opacity: ${(props) => (props.search ? '1' : '0')};
    border: 0;
    border-radius: 500px;
    color: #000;
    height: 40px;
    text-overflow: ellipsis;
    width: 346px;
  }

  div {
    color: #fff;
  }
`;
