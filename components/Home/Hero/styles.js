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

  @media (max-width: 900px) {
    background-image: url('https://content-tooling.spotifycdn.com/images/1d2242b4-f071-4244-a276-3bcdc58e77cf_lie_circles-tablet.svg');
    background-position: center center;
    background-size: auto 181%;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  @media (max-width: 770px) {
  }
`;

export const Content = styled.div`
  .content__title {
    width: 900px;
    font-size: ${(props) => (props.logged ? '96px' : '156px')};
    font-family: Helvetica;
    line-height: ${(props) => (props.logged ? '96px' : '166px')};
    padding-bottom: 40px;
    letter-spacing: -0.04em;
    color: #1ed760;
    font-weight: 700;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 60px;
      line-height: 1.2;
    }

    @media (max-width: 770px) {
      font-size: 32px;
    }

    @media (max-width: 490px) {
      width: 400px;
    }
  }
`;
