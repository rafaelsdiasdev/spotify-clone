import { Container } from './styles';
import SpotifyPlayer from 'react-spotify-web-playback';
import { useCallback, useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useRouter } from 'next/router';
import PrivateRoute from '../../PrivateRoute';

const Playing = ({ accessToken }) => {
  const {
    track,
    initialTracks,
    setInitialTracks,
    setCurrentMusic,
    play,
    setPlay,
    setMusicTitle,
    setCurrentArtist,
    active,
    setActive,
  } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (track)
      if (track && initialTracks) {
        setInitialTracks(false);
        return;
      } else {
        setPlay(true);
      }
  }, [track]);

  const handleCallback = useCallback(({ type, ...state }) => {
    if (state.error === 'Authentication failed') return router.replace('/home');
    if (state.isActive) setActive(true);
    else setActive(false);
    if (state.isPlaying) {
      setCurrentMusic(state.track.name);
      setCurrentArtist(state.track.artists[0].name);
      setMusicTitle(`${state.track.name} - ${state.track.artists[0].name}`);
    } else {
      setCurrentMusic(null);
      setMusicTitle(null);
      setCurrentArtist(null);
    }
    setPlay(state.isPlaying);
  }, []);

  return (
    <Container isActive={active}>
      <SpotifyPlayer
        styles={{
          activeColor: '#fff',
          bgColor: '#333',
          color: '#fff',
          loaderColor: '#fff',
          sliderColor: '#1cb954',
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
          position: 'fixed',
        }}
        token={accessToken}
        showSaveIcon
        magnifySliderOnHover={true}
        callback={handleCallback}
        play={play}
        uris={track}
        autoPlay={false}
      />
    </Container>
  );
};

export default PrivateRoute(Playing);
