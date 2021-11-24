import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';

import PrivateRoute from '../../components/PrivateRoute';

import spotifyApi from '../../services/spotifyApi';
import { getMyTopArtists } from '../../spotify/wrappers';

import Card from '../../components/Dashboard/Card';

import { ResultsContainer, NoResultsContainer } from './styles';
import SearchResults from '../../components/Dashboard/SearchResults';

const Search = () => {
  const router = useRouter();
  const { search } = useContext(UserContext);

  const [topArtists, setTopArtists] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);

  useEffect(async () => {
    if (!search) {
      setTrackResults([]);
      setArtistsResults([]);

      const data = await getMyTopArtists();

      setTopArtists(data);
      return;
    }

    try {
      let cancel = false;
      const searchTracks = await spotifyApi.searchTracks(search);
      const tracks = await searchTracks.body.tracks.items.map((track) => {
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images,
          duration: (track.duration_ms / 60 / 1000)
            .toFixed(2)
            .replace('.', ':'),
        };
      });

      const searchArtists = await spotifyApi.searchArtists(search);
      const artists = await searchArtists.body.artists.items.map((image) => {
        return {
          image: image.images[1]?.url,
        };
      });

      if (cancel) return;

      setTrackResults(tracks);
      setArtistsResults(artists);
    } catch (error) {
      router.replace('/home');
    }

    return () => (cancel = true);
  }, [search]);

  if (!search) {
    return (
      <NoResultsContainer>
        <Card
          card={topArtists}
          title="Your Top Artists"
          wrapper={'getArtistTopTracks'}
        />
        ;
      </NoResultsContainer>
    );
  }
  return (
    <ResultsContainer>
      <SearchResults
        artistsResults={artistsResults}
        trackResults={trackResults}
      />
    </ResultsContainer>
  );
};

export default PrivateRoute(Search);
