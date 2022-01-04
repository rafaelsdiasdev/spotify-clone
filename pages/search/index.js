import validateRouter from '../../utils/validateRouter';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';
import Link from 'next/link';

import spotifyApi from '../../services/spotifyApi';
import Wrappers from '../../utils/Wrappers';

import Card from '../../components/Dashboard/Card';

import SearchResults from '../../components/Dashboard/SearchResults';
import {
  ResultsContainer,
  NoResultsContainer,
  CardContainer,
} from '../../styles/search';

const Search = ({ session, myRecentlyPlayedTracks, myTopArtists }) => {
  const router = useRouter();
  const { search, track, setTrack, setSession, active } = useContext(
    UserContext,
  );

  const [topArtists, setTopArtists] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);
  const [recentlyTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    setSession(session);
  }, [session]);

  useEffect(() => {
    setRecentTracks(myRecentlyPlayedTracks);
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

      setTopArtists(myTopArtists);
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
        <CardContainer active={active}>
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

export default Search;

export const getServerSideProps = validateRouter(async (token, session) => {
  spotifyApi.setAccessToken(token);
  const { getMyRecentlyPlayedTracks, getMyTopArtists } = Wrappers();

  const myRecentlyPlayedTracks = await getMyRecentlyPlayedTracks();
  const myTopArtists = await getMyTopArtists();

  return {
    props: {
      session,
      myRecentlyPlayedTracks,
      myTopArtists,
    },
  };
});
