import PropTypes from 'prop-types';
import Image from 'next/image';

import playIcon from '../../../public/svg/play.svg';
import pauseIcon from '../../../public/svg/pause.svg';

import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import Play from '../../../utils/Play';
import { Button, Container, ContentArtist, ContentImage, Mask } from './styles';

const CardTopResult = ({ artistsResults, trackResults }) => {
  const { setTrack, currentMusic, play, setPlay } = useContext(UserContext);

  const handlePlay = async (id, wrapper, results = trackResults) => {
    if (play) setPlay(false);
    const data = results.map((track) => track.uri);
    const tracks = await Play(id, wrapper, data);
    setTrack(tracks);
  };

  return (
    <Container>
      <ContentImage>
        {artistsResults[0] && (
          <Image src={artistsResults[0]?.image} height={92} width={92} alt="" />
        )}
      </ContentImage>
      <ContentArtist>
        <div className="artist__name">{trackResults[0]?.artist}</div>
        <div className="artist__title">
          <span>Artist</span>
        </div>
      </ContentArtist>

      <Mask>
        <Button className="button">
          <button aria-label="Play" onClick={() => handlePlay()}>
            {currentMusic === trackResults[0]?.title ? (
              <Image src={pauseIcon} width="24" height="24" alt="pause" />
            ) : (
              <Image src={playIcon} width="24" height="24" alt="play" />
            )}
          </button>
        </Button>
      </Mask>
    </Container>
  );
};

CardTopResult.propTypes = {
  title: PropTypes.string,
  artistsResults: PropTypes.array,
  trackResults: PropTypes.array,
};

export default CardTopResult;
