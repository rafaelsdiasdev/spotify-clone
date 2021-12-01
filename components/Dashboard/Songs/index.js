import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../../../contexts/UserContext';
import usePlay from '../../../hooks/usePlay';
import { Container } from './styles';

const Songs = ({ trackResults }) => {
  const { setTrack, currentMusic, play, setPlay } = useContext(UserContext);

  const handlePlay = async (id, wrapper, index) => {
    if (play) setPlay(false);
    const data = trackResults
      .filter((track, idx) => idx >= index)
      .map((track) => track.uri);
    const tracks = await usePlay(id, wrapper, data);
    setTrack(tracks);
  };

  return (
    <Container>
      {trackResults
        .filter((track, idx) =>
          window.screen.width <= 900 ? idx <= 20 : idx <= 3,
        )
        .map((track, idx) => (
          <div
            onClick={() => handlePlay('', 'searchTracks', idx)}
            className="track-container"
            key={idx}
          >
            <div className="tracks-list">
              <div className="tracks-image">
                <img src={track.albumUrl[2].url} alt={track.title} />
              </div>
              <div>
                {track.title} <span>{track.artist}</span>
              </div>
              <div className="tracks-duration">{track.duration}</div>
            </div>
            <div className="track-mask">
              <div
                className="btn-play"
                onClick={() => handlePlay('', 'searchTracks', idx)}
              >
                <button>
                  {currentMusic ? (
                    <svg height="32" role="img" width="32" viewBox="0 0 24 24">
                      <rect
                        x="5"
                        y="3"
                        width="4"
                        height="18"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="15"
                        y="3"
                        width="4"
                        height="18"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  ) : (
                    <svg height="32" role="img" width="32" viewBox="0 0 24 24">
                      <polygon
                        points="21.57 12 5.98 3 5.98 21 21.57 12"
                        fill="#fff"
                        color="#fff"
                      ></polygon>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
    </Container>
  );
};

Songs.propTypes = {
  trackResults: PropTypes.array,
};

Songs.defaultProps = {};

export default Songs;
