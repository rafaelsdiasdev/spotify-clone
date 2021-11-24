// import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { usePlay } from '../../../hooks/usePlay';
import { Container } from './styles';

const TopResult = ({ title, artistsResults, trackResults }) => {
  const { setTrack } = useContext(UserContext);

  const handlePlay = async (id, wrapper, results = trackResults) => {
    const data = results.map((track) => track.uri);
    const tracks = await usePlay(id, wrapper, data);
    setTrack(tracks);
  };

  return (
    <Container>
      <div className="top-results-title">
        <div>
          <h2>{title}</h2>
        </div>
      </div>
      <div className="top-results-content">
        <div className="top-results-image">
          <img src={artistsResults[0]?.image} alt="" />
        </div>
        <div className="top-results-artist">
          <div className="top-results-artist-name">
            {trackResults[0]?.artist}
          </div>
          <div className="top-results-artist-title">
            <span>Artist</span>
          </div>
        </div>

        <div className="top-results-mask">
          <div className="top-results-button">
            <button aria-label="Play" onClick={() => handlePlay()}>
              <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TopResult;
