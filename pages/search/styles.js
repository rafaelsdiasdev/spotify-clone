import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 440px auto;
  gap: 24px;
  margin-top: 16px;
  padding: 0 32px;

  .top-results {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    min-width: 100%;

    .top-results-title {
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
    .top-results-content {
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

      &:hover {
        background-color: #282828;
      }

      .top-results-image {
        width: 92px;
        height: 92px;

        img {
          box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }

      .top-results-artist {
        color: #fff;
        .top-results-artist-name {
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 36px;
          text-transform: none;
        }
        .top-results-artist-title {
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
      }

      .top-results-button {
        position: absolute;
        right: 20px;
        bottom: 20px;
        opacity: ${(props) => (props.isHovered ? 1 : 0)};
        z-index: 2;

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
      }

      .top-results-mask {
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
    }
  }

  .tracks {
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

    .tracks-list {
      width: auto;
      display: grid;
      grid-template-columns: 60px auto 40px;
      padding: 0 10px 16px;

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
  }
`;
