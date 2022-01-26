import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import PlayButton from '../PlayButton';
import Play from '../../../utils/Play';
import { CardDetails, CardImage, CardMask, Container } from './styles';

const Card = ({ id, uri, idx, name, image, type, card, wrapper }) => {
  const { setTrack, play, setPlay, currentArtist, currentMusic } =
    useContext(UserContext);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [pauseIcon, setPauseIcon] = useState(false);

  useEffect(() => {
    if (card) {
      setData(card);
    } else {
      router?.push('/');
    }
  }, [card, router]);

  useEffect(() => {
    if (currentArtist === name || currentMusic === name) setPauseIcon(true);
    else setPauseIcon(false);
  }, [currentMusic, currentArtist, name]);

  const handlePlay = async (id, wrapper, track, index) => {
    if (play) setPlay(false);
    if (id) {
      const tracks = await Play(id, wrapper, track);
      setTrack(tracks);
    } else {
      const recentlyTracks = data.filter((track, idx) => idx >= index);
      const recentlyTracksMap = recentlyTracks.map((track) => track.uri);
      const tracks = await Play(id, wrapper, recentlyTracksMap);
      setTrack(tracks);
    }
  };

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
        <PlayButton
          handlePlay={handlePlay}
          currentArtist={currentArtist}
          currentMusic={currentMusic}
          name={name}
          pauseIcon={pauseIcon}
          id={id}
          wrapper={wrapper}
          uri={uri}
          idx={idx}
        />
      </CardMask>
    </Container>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  handlePlay: PropTypes.func,
  id: PropTypes.string,
  uri: PropTypes.string,
  idx: PropTypes.number,
  wrapper: PropTypes.string,
};

Card.defaultProps = {
  name: 'Title',
  image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
  type: 'type',
};

export default Card;
