import styled from 'styled-components';

export const Container = styled.section`
  min-width: 400px;
  font-family: Helvetica, arial, sans-serif;

  @media (max-width: 900px) {
    margin-bottom: 180px;
  }
  .tracks-title {
    div {
      margin-bottom: 16px;
      h2 {
        color: #fff;
        display: inline-block;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 28px;
        text-transform: none;
      }
    }
  }

  .track-container {
    position: relative;
    border-radius: 4px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);

      .tracks-list {
        .tracks-image {
          img {
            filter: brightness(40%);
          }
        }
      }
    }

    .tracks-list {
      width: auto;
      display: grid;
      grid-template-columns: 60px auto 40px;
      align-items: center;
      height: 56px;
      padding: 0 10px;

      .tracks-image {
        margin-right: 16px;

        img {
          height: 40px;
          width: 40px;
        }
      }

      div {
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
      }
      .tracks-duration {
        color: #b3b3b3;
        letter-spacing: 2px;
      }
    }

    .track-mask {
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
    }

    &:hover {
      .btn-play {
        opacity: 1;
      }
    }

    .btn-play {
      position: absolute;
      left: 2px;
      bottom: 18px;
      opacity: 0;
      z-index: 2;
      transition: all 0.3s ease;

      button {
        cursor: pointer;
        background-color: transparent;
        color: #fff;
        height: 16px;
        width: 16px;
        border: none;

        svg {
          height: 16px;
          width: 16px;
        }
      }
    }
  }
`;
