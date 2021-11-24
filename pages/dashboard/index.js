import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PrivateRoute from '../../components/PrivateRoute';

import { UserContext } from '../../contexts/UserContext';
import { getMyRecentlyPlayedTracks } from '../../spotify/wrappers';

import Card from '../../components/Dashboard/Card';

import { Container } from './styles';

let Dashboard = ({ user }) => {
  const { session, setSession } = useContext(UserContext);
  const [recentlyTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    setSession(user?.session);
  }, [session]);

  useEffect(async () => {
    const data = await getMyRecentlyPlayedTracks();
    setRecentTracks(data);
  }, []);

  return (
    <Container>
      <Card
        card={recentlyTracks}
        title="Recently played"
        wrapper="getMyRecentlyPlayedTracks"
      />
    </Container>
  );
};

export default PrivateRoute(Dashboard);
