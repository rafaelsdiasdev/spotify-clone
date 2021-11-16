import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main-view;

  height: 60px;
  min-width: 0;
  width: 100%;
  background-color: #121212;
  padding: 0 32px;

  header {
    display: grid;
    grid-template-columns: 96px auto 115px;
    /* justify-content: space-between;
    align-items: center; */
    width: 100%;
    height: 100%;
    align-items: center;

    .search {
      flex: 0 1 364px;
      position: relative;
      display: ${(props) => (props.search ? 'flex' : 'none')};
      input {
        border: 0;
        border-radius: 500px;
        color: #000;
        height: 40px;
        text-overflow: ellipsis;
        width: 346px;
        padding: 6px 48px;
        font-weight: 400;
        letter-spacing: normal;
        line-height: 16px;
        text-transform: none;
      }

      .bloom {
        align-items: center;
        bottom: 0;
        display: flex;
        left: 12px;
        pointer-events: none;
        position: absolute;
        right: 12px;
        top: 0;
      }
    }

    .button {
      display: flex;
      justify-content: flex-end;
      color: #fff;
    }
  }
`;
