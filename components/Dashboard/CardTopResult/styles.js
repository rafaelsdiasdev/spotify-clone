import styled from 'styled-components';

export const Container = styled.div`
  font-family: Helvetica, arial, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #181818;
  max-width: 440px;
  padding: 20px;
  gap: 20px;
  transition: background-color 0.3s ease;
  position: relative;
  isolation: isolate;

  border-radius: 4px;

  @media (max-width: 900px) {
    display: none;
  }

  &:hover {
    background-color: #282828;
  }
`;

export const ContentImage = styled.div`
  width: 92px;
  height: 92px;
  border-radius: 50%;
  box-shadow: 0 8px 24px rgb(0 0 0 / 50%);

  img {
    border-radius: 50%;
  }
`;

export const ContentArtist = styled.div`
  color: #fff;
  margin-top: 28px;
  .artist__name {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 36px;
    text-transform: none;
  }
  .artist__title {
    margin-top: 4px;
    span {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 500px;
      color: #fff;
      display: inline-block;
      padding: 4px 12px;

      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 16px;
      text-transform: uppercase;
    }
  }
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
    .button {
      opacity: 1;
    }
  }
`;
export const Button = styled.div`
  position: absolute;
  right: 68px;
  bottom: 20px;
  opacity: 0;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.06);
  }

  button {
    cursor: pointer;
    background-color: #1db954;
    color: #fff;
    border-radius: 500px;
    height: 48px;
    width: 48px;
    border: none;
  }
`;
