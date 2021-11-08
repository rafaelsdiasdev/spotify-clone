import React, { useContext, useEffect, useState } from 'react';
import useAuth from '../useAuth';
import { UserContext } from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import PrivateRoute from '../../components/PrivateRoute';
import spotifyApi from '../../services/spotifyApi';

function Dashboard() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    if (!search) return setSearch('');
    // if (!accessToken) return;
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
  }, [search]);

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

export default PrivateRoute(Dashboard);
