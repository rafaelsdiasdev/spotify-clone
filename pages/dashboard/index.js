import { useContext, useEffect, useState } from 'react';
import PrivateRoute from '../../components/PrivateRoute';
import Link from 'next/link';

import { UserContext } from '../../contexts/UserContext';

import Card from '../../components/Dashboard/Card';

import { CardContainer, Container } from './styles';
import Wrappers from '../../utils/Wrappers';

let Dashboard = ({ user }) => {
  const { session, setSession, track, setTrack } = useContext(UserContext);
  const [recentlyTracks, setRecentTracks] = useState([]);

  const { getMyRecentlyPlayedTracks } = Wrappers();

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

  return (
    <Container>
      <CardContainer>
        <div className="top">
          <div className="top-container">
            <div className="title">
              <h2>Recently played</h2>
            </div>
            <Link href="#" className="more">
              See All
            </Link>
          </div>
        </div>
        <div className="card-container">
          {recentlyTracks.map((el, idx) => (
            <Card
              idx={idx}
              name={el.name}
              image={el.image}
              type={el.type}
              uri={el.uri}
              id={el.id}
              card={recentlyTracks}
              wrapper="getMyRecentlyPlayedTracks"
              key={idx}
            />
          ))}
        </div>
      </CardContainer>
    </Container>
  );
};

export default PrivateRoute(Dashboard);
