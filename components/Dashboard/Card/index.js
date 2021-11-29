import { useContext } from 'react';
import PropTypes from 'prop-types';

import { UserContext } from '../../../contexts/UserContext';

import usePlay from '../../../hooks/usePlay';

import { Container } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

const Card = ({ id, uri, idx, name, image, type, card, wrapper }) => {
  const { setTrack } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (card) {
      setData(card);
    }
  }, []);

  async function handlePlay(id, wrapper, track, index) {
    if (id) {
      const tracks = await usePlay(id, wrapper, track);
      setTrack(tracks);
    } else {
      const recentlyTracks = data
        .filter((track, idx) => idx >= index)
        .map((track) => track.uri);
      const tracks = await usePlay(id, wrapper, recentlyTracks);
      setTrack(tracks);
    }
  }

  return (
    <Container>
      <div className="img">
        <img src={image} alt={name} />
      </div>

      <div className="details">
        <p>{name}</p>

        <span>{type}</span>
      </div>

      <div className="card-mask">
        <div className="card-button">
          <button
            aria-label="Play"
            onClick={() => handlePlay(id, wrapper, uri, idx)}
          >
            <svg height="24" role="img" width="24" viewBox="0 0 24 24">
              <polygon
                points="21.57 12 5.98 3 5.98 21 21.57 12"
                fill="currentColor"
              ></polygon>
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  handlePlay: PropTypes.func.isRequired,
};

Card.defaultProps = {
  name: 'Title',
  image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
  type: 'type',
  handlePlay: () => {
    return 'tracks';
  },
};

export default Card;
