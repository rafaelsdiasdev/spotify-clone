import Head from 'next/head';

import spotifyApi from '../../../services/spotifyApi';

import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import MainView from '../MainView';
import { Container } from './styles';

import useAuth from '../../../hooks/useAuth';

function DashboardLayout({ children }) {
  const accessToken = useAuth();

  if (!accessToken) return <h1>Loading...</h1>;
  spotifyApi.setAccessToken(accessToken);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Container>
        {accessToken && (
          <div className="top-container">
            <Topbar />
            <Sidebar />
            <MainView>{children}</MainView>
            <Playing accessToken={accessToken} />
          </div>
        )}
      </Container>
    </>
  );
}

export default DashboardLayout;
