import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import pauseIcon from '../../../public/svg/songPause.svg';
import playIcon from '../../../public/svg/songPlay.svg';

import { UserContext } from '../../../contexts/UserContext';
import Play from '../../../utils/Play';
import {
  BtnPlay,
  Container,
  Content,
  Mask,
  TrackDuration,
  TrackImage,
  TrackList,
  TrackTitle,
} from './styles';

const Songs = ({ trackResults }) => {
  const { setTrack, currentMusic, play, setPlay } = useContext(UserContext);
  const [width, setWidth] = useState(null);

  const handlePlay = async (id, wrapper, index) => {
    if (play) setPlay(false);
    const data = trackResults
      .filter((track, idx) => idx >= index)
      .map((track) => track.uri);
    const tracks = await Play(id, wrapper, data);
    setTrack(tracks);
  };

  useEffect(() => {
    setWidth(window.screen.width);
    function handleResize() {
      setWidth(window.screen.width);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      {trackResults
        .filter((track, idx) => (width <= 900 ? idx <= 20 : idx <= 3))
        .map((track, idx) => (
          <Content
            onClick={() => handlePlay('', 'searchTracks', idx)}
            className="track-container"
            key={idx}
          >
            <TrackList className="tracks__list">
              <TrackImage className="tracks__image">
                <Image
                  height={40}
                  width={40}
                  src={track.albumUrl[2].url}
                  alt={track.title}
                />
              </TrackImage>
              <TrackTitle>
                {track.title} <span>{track.artist}</span>
              </TrackTitle>
              <TrackDuration>{track.duration}</TrackDuration>
            </TrackList>
            <Mask>
              <BtnPlay
                className="btn-play"
                onClick={() => handlePlay('', 'searchTracks', idx)}
              >
                <button>
                  {currentMusic === track.title ? (
                    <Image src={pauseIcon} width="16" height="16" />
                  ) : (
                    <Image src={playIcon} width="16" height="16" />
                  )}
                </button>
              </BtnPlay>
            </Mask>
          </Content>
        ))}
    </Container>
  );
};

Songs.propTypes = {
  trackResults: PropTypes.array,
};

Songs.defaultProps = {};

export default Songs;
