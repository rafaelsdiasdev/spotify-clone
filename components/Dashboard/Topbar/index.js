import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import spotifyApi from '../../../services/spotifyApi';
import { UserContext } from '../../../contexts/UserContext';
import { Container } from './styles';

const Topbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { searchResult, setSearchResult } = useContext(UserContext);

  console.log(searchResult);

  const pageSearch = router.pathname === '/search';

  useEffect(() => {
    if (!search) return setSearch('');
    // if (!accessToken) return;
    let canSearch = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (canSearch) return;
      setSearchResult(
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
    <Container search={pageSearch}>
      <header>
        <input
          type="search"
          id="search"
          name="seatch"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div>Rafael</div>
      </header>
    </Container>
  );
};

export default Topbar;
