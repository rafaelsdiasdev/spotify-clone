import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('https://www-growth.scdn.co/static/home/bursts.svg');
  background-size: 170%;
  background-position: 44% 7%;
  justify-content: center;
  min-height: calc(100vh - 82px);
  background-color: rgb(41, 65, 171);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 900px;
    font-size: ${(props) => (props.logged ? '96px' : '156px')};
    font-family: Helvetica;
    line-height: ${(props) => (props.logged ? '96px' : '166px')};
    padding-bottom: 40px;
    letter-spacing: -0.04em;
    color: #1ed760;
    font-weight: 700;
    text-align: center;
  }
`;
