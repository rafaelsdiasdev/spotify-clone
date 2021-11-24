import styled from 'styled-components';

export const Container = styled.section`
  font-family: Helvetica, arial, sans-serif;
  color: #fff;
  width: 100%;
  .top {
    width: 100%;

    .top-container {
      margin-bottom: 16px;
      display: grid;
      grid-template-columns: 1fr 60px;

      .title {
        h2 {
          display: inline-block;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.04em;
          line-height: 28px;
          text-transform: none;
        }
      }
    }

    a {
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.1em;
      line-height: 16px;
      text-transform: uppercase;
      color: #fff;
    }
  }

  .card-container {
    display: flex;
    gap: 24px;

    .card {
      position: relative;
      background-color: #181818;
      padding: 16px;
      border-radius: 4px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #282828;
      }

      .img {
        box-shadow: 0 8px 24px rgb(0 0 0 / 50%);
        border-radius: 50%;
        margin-bottom: 20px;
        width: 160px;
        height: 160px;

        img {
          border-radius: 50%;
          width: 100%;
          height: 100%;
        }
      }

      .details {
        min-height: 62px;
        p {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: normal;
          line-height: 24px;
          text-transform: none;
          display: grid;
        }

        span {
          font-size: 14px;
          font-weight: 400;
          letter-spacing: normal;
          line-height: 16px;
          text-transform: capitalize;
        }
      }
    }

    .card-mask {
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
        .card-button {
          opacity: 1;
        }
      }

      .card-button {
        position: absolute;
        right: 32%;
        bottom: 40%;
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
          height: 40px;
          width: 40px;
          border: none;
        }
      }
    }
  }
`;
