import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';
import Link from 'next/link';

import PrivateRoute from '../../components/PrivateRoute';

import spotifyApi from '../../services/spotifyApi';
import useWrappers from '../../hooks/useWrappers';

import Card from '../../components/Dashboard/Card';

import SearchResults from '../../components/Dashboard/SearchResults';
import { ResultsContainer, NoResultsContainer, CardContainer } from './styles';

const Search = ({ user }) => {
  const router = useRouter();
  const { search, track, setTrack, session, setSession } = useContext(
    UserContext,
  );

  const [topArtists, setTopArtists] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);
  const [recentlyTracks, setRecentTracks] = useState([]);

  const { getMyTopArtists, getMyRecentlyPlayedTracks } = useWrappers();

  useEffect(() => {
    setSession(user?.session);
  }, [session]);

  useEffect(async () => {
    const data = await getMyRecentlyPlayedTracks();
    setRecentTracks(data);
  }, []);

  useEffect(() => {
    if (recentlyTracks.length > 0 && !track) {
      const tracks = recentlyTracks.map((track) => track.uri);
      setTrack(tracks);
    }
  }, [recentlyTracks]);

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
        <CardContainer>
          <div className="top">
            <div className="top-container">
              <div className="title">
                <h2>Your Top Artists</h2>
              </div>
              <Link href="#" className="more">
                See All
              </Link>
            </div>
          </div>
          <div className="card-container">
            {topArtists.map((el, idx) => (
              <Card
                idx={idx}
                name={el.name}
                image={el.image}
                type={el.type}
                uri={el.uri}
                id={el.id}
                card={topArtists}
                wrapper={'getArtistTopTracks'}
                key={idx}
              />
            ))}
          </div>
        </CardContainer>
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
