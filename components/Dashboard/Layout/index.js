import Head from 'next/head';

import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import MainView from '../MainView';
import { Container } from './styles';
import spotifyApi from '../../../services/spotifyApi';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import useAuth from '../../../pages/useAuth';
import { useRouter } from 'next/router';

export default function DashboardLayout({ children }) {
  const { code } = useContext(UserContext);
  const router = useRouter();

  const token = useAuth(code);

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);

      if (router.asPath.includes('/login')) router.replace('/dashboard');
      else router.replace(router.asPath);
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Container>
        <div className="top-container">
          <Topbar />
          <Sidebar />
          <MainView>{children}</MainView>
          <Playing />
        </div>
      </Container>
    </>
  );
}
