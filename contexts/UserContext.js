import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [code, setCode] = useState(null);
  const [logged, setLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [track, setTrack] = useState(null);
  const [search, setSearch] = useState('');
  const [session, setSession] = useState(null);
  const [initialTracks, setInitialTracks] = useState(true);
  const [currentMusic, setCurrentMusic] = useState(true);
  const [musicTitle, setMusicTitle] = useState(null);
  const [currentArtist, setCurrentArtist] = useState(null);
  const [play, setPlay] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <UserContext.Provider
      value={{
        code,
        setCode,
        logged,
        setLogged,
        isMenuOpen,
        setIsMenuOpen,
        trackResults,
        setTrackResults,
        artistsResults,
        setArtistsResults,
        accessToken,
        setAccessToken,
        track,
        setTrack,
        search,
        setSearch,
        session,
        setSession,
        initialTracks,
        setInitialTracks,
        currentMusic,
        setCurrentMusic,
        play,
        setPlay,
        musicTitle,
        setMusicTitle,
        currentArtist,
        setCurrentArtist,
        active,
        setActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
