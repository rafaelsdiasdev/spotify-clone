import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../useAuth';
import { UserContext } from '../../contexts/UserContext';
import SpotifyWebApi from 'spotify-web-api-node';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

export default function Dashboard() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { code, setCode } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, []);

  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get('code'));
  }, [code]);

  const accessToken = useAuth(code);

  console.log(results);

  useEffect(() => {
    if (!accessToken && !code) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearch('');
    if (!accessToken) return;
    let canSearch = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (canSearch) return;
      setResults(
        res.body.tracks.items.map((track) => {
          return {
            artist: track.artists[0].name,
          };
        }),
      );
    });

    return () => (canSearch = true);
  }, [search, accessToken]);

  return (
    <div>
      <input
        type="search"
        id="search"
        name="seatch"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
}
