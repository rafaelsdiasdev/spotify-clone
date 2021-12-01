import PropTypes from 'prop-types';

import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import usePlay from '../../../hooks/usePlay';
import { Container } from './styles';

const CardTopResult = ({ artistsResults, trackResults }) => {
  const { setTrack, currentMusic, play, setPlay } = useContext(UserContext);

  const handlePlay = async (id, wrapper, results = trackResults) => {
    if (play) setPlay(false);
    const data = results.map((track) => track.uri);
    const tracks = await usePlay(id, wrapper, data);
    setTrack(tracks);
  };

  return (
    <Container>
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
              {currentMusic ? (
                <svg
                  height="24"
                  role="img"
                  width="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
                <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                  <polygon
                    points="21.57 12 5.98 3 5.98 21 21.57 12"
                    fill="currentColor"
                  ></polygon>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

CardTopResult.propTypes = {
  title: PropTypes.string,
  artistsResults: PropTypes.array,
  trackResults: PropTypes.array,
};

export default CardTopResult;
