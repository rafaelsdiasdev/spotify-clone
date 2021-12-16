import styled from 'styled-components';

export const Container = styled.section`
  min-width: 400px;
  font-family: Helvetica, arial, sans-serif;

  @media (max-width: 900px) {
    margin-bottom: 180px;
  }
`;

export const Content = styled.div`
  position: relative;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);

    .tracks__list {
      .tracks__image {
        img {
          filter: brightness(40%);
        }
      }
    }
  }
`;

export const TrackList = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: 60px auto 40px;
  align-items: center;
  height: 56px;
  padding: 0 10px;
  margin: 7px 0;
`;

export const TrackImage = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const TrackTitle = styled.div`
  display: grid;
  align-items: center;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 18px;
  text-transform: none;

  span {
    font-size: 14px;
    color: #b3b3b3;
  }
`;

export const TrackDuration = styled.div`
  color: #b3b3b3;
  letter-spacing: 2px;
`;

export const Mask = styled.div`
  position: absolute;
  z-index: 0;
  bottom: 0;
  content: '';
  cursor: pointer;
  left: 0;
  overflow: hidden;
  right: 0;
  text-indent: 100%;
  top: 0;
  white-space: nowrap;

  &:hover {
    .btn-play {
      opacity: 1;
    }
  }
`;

export const BtnPlay = styled.div`
  position: absolute;
  left: -5px;
  bottom: 18px;
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;

  button {
    display: inline-flex;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    border: none;
  }
`;
