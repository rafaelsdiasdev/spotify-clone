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
  const { search, track, setTrack, setSession, active } =
    useContext(UserContext);

  const [topArtists, setTopArtists] = useState([]);
  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);
  const [recentlyTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    setSession(session);
  }, [session, setSession]);

  useEffect(() => {
    setRecentTracks(myRecentlyPlayedTracks);
  }, [myRecentlyPlayedTracks]);

  useEffect(() => {
    if (recentlyTracks.length > 0 && !track) {
      const tracks = recentlyTracks.map((track) => track.uri);
      setTrack(tracks);
    }
  }, [recentlyTracks, setTrack, track]);

  useEffect(() => {
    let cancel = false;

    const getResults = async () => {
      if (!search) {
        setTrackResults([]);
        setArtistsResults([]);

        setTopArtists(myTopArtists);
        return;
      }

      const { searchItems } = Wrappers();
      const { trackResults, artistsResults } = await searchItems(
        search,
        cancel,
      );
      setTrackResults(trackResults);
      setArtistsResults(artistsResults);
    };
    getResults();

    return () => (cancel = true);
  }, [myTopArtists, router, search]);

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
