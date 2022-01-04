import validateRouter from '../../utils/validateRouter';
import spotifyApi from '../../services/spotifyApi';
import Wrappers from '../../utils/Wrappers';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Card from '../../components/Dashboard/Card';
import Link from 'next/link';
import { CardContainer, Container } from '../../styles/dashboard';

let Dashboard = ({ session, myRecentlyPlayedTracks }) => {
  const { setSession, track, setTrack, active } = useContext(UserContext);
  const [recentlyTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    setRecentTracks(myRecentlyPlayedTracks);
    setSession(session);
  }, []);

  useEffect(() => {
    if (recentlyTracks.length > 0 && !track) {
      const tracks = recentlyTracks.map((track) => track.uri);
      setTrack(tracks);
    }
  }, [recentlyTracks]);

  return (
    <Container>
      <CardContainer active={active}>
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

export default Dashboard;

export const getServerSideProps = validateRouter(async (token, session) => {
  spotifyApi.setAccessToken(token);
  const { getMyRecentlyPlayedTracks } = Wrappers();

  const myRecentlyPlayedTracks = await getMyRecentlyPlayedTracks();

  return {
    props: {
      myRecentlyPlayedTracks,
      session,
    },
  };
});
