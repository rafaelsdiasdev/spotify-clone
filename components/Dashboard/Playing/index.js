import { Container } from './styles';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useCallback, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useState, useEffect } from 'react';

const Playing = () => {
  const { accessToken } = useContext(UserContext);
  const [play, setPlay] = useState(false);
  const { track } = useContext(UserContext);

  useEffect(() => {
    setPlay(true);
  }, [track]);

  const handleCallback = useCallback(({ type, ...state }) => {
    setPlay(state.isPlaying);
  }, []);

  return (
    accessToken && (
      <Container>
        <SpotifyPlayer
          styles={{
            activeColor: '#fff',
            bgColor: '#333',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
          }}
          name="Spotify Web Player"
          token={accessToken}
          showSaveIcon
          magnifySliderOnHover={true}
          persistDeviceSelection={true}
          syncExternalDevice={true}
          autoPlay={true}
          callback={handleCallback}
          play={play}
          uris={track}
        />
      </Container>
    )
  );
};

export default Playing;
