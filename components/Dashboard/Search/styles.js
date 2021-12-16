import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 1 364px;
  position: relative;
  display: ${(props) => (props.search ? 'flex' : 'none')};

  @media (max-width: 900px) {
    flex-grow: 1;
  }
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

    @media (max-width: 900px) {
      color: #fff;
      width: 100%;
    }
  }
`;

export const Icon = styled.div`
  align-items: center;
  top: 0;
  bottom: 0;
  right: 12px;
  left: 12px;
  display: flex;
  pointer-events: none;
  position: absolute;
`;
