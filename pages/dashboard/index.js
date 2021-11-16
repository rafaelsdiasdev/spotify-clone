import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PrivateRoute from '../../components/PrivateRoute';
import { UserContext } from '../../contexts/UserContext';
import spotifyApi from '../../services/spotifyApi';

import { Container } from './styles';

let Dashboard = ({ user }) => {
  const { session, setSession } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setSession(user?.session);
  }, [session]);

  useEffect(async () => {
    try {
      const response = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 20,
      });
      const data = await response.body.items
        .map((el) => {
          return {
            name: el.track.name,
            uri: el.track.uri,
          };
        })
        .filter(function (track) {
          return (
            !this[JSON.stringify(track)] && (this[JSON.stringify(track)] = true)
          );
        }, {});

      setResult(data);
    } catch (error) {
      console.error('TEEEEST', error);
      router.replace('/home');
    }
  }, []);

  return (
    <Container>
      {result.map((el, idx) => (
        <div key={idx}>
          <h1 style={{ color: '#fff' }}>{el.name}</h1>
          <p style={{ color: '#fff' }}>{el.uri}</p>
        </div>
      ))}
    </Container>
  );
};

export default PrivateRoute(Dashboard);
