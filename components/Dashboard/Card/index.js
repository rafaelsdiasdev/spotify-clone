import { useContext } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { UserContext } from '../../../contexts/UserContext';

import usePlay from '../../../hooks/usePlay';

import {
  CardButton,
  CardDetails,
  CardImage,
  CardMask,
  Container,
} from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

import playIcon from '../../../public/svg/play.svg';
import pauseIcon from '../../../public/svg/pause.svg';

const Card = ({ id, uri, idx, name, image, type, card, wrapper }) => {
  const { setTrack, play, setPlay, currentMusic } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (card) {
      setData(card);
    }
  }, []);

  async function handlePlay(id, wrapper, track, index) {
    if (play) setPlay(false);
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
      <CardImage>
        <Image src={image} alt={name} height={160} width={160} />
      </CardImage>
      <CardDetails>
        <p>{name}</p>
        <span>{type}</span>
      </CardDetails>

      <CardMask>
        <CardButton className="card-button">
          <button
            aria-label="Play"
            onClick={() => handlePlay(id, wrapper, uri, idx)}
          >
            {currentMusic === name ? (
              <Image src={pauseIcon} height="24" width="24" />
            ) : (
              <Image src={playIcon} width="24" height="24" />
            )}
          </button>
        </CardButton>
      </CardMask>
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
