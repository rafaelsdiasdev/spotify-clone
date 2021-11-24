import { Container } from './styles';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useCallback, useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PrivateRoute from '../../PrivateRoute';

const Playing = ({ accessToken }) => {
  const [play, setPlay] = useState(false);
  const { track } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    setPlay(true);
  }, [track]);

  const handleCallback = useCallback(({ type, ...state }) => {
    if (state.error === 'Authentication failed') return router.replace('/home');
    setPlay(state.isPlaying);
  }, []);

  return (
    <Container>
      (
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
        token={accessToken}
        showSaveIcon
        magnifySliderOnHover={true}
        callback={handleCallback}
        play={play}
        uris={track}
      />
      )
    </Container>
  );
};

export default PrivateRoute(Playing);
