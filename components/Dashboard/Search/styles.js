import styled from 'styled-components';

export const Container = styled.div`
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
`;
