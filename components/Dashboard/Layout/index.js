import Head from 'next/head';

import spotifyApi from '../../../services/spotifyApi';

import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import MainView from '../MainView';
import { Container } from './styles';

import useAuth from '../../../hooks/useAuth';
import { useContext, useEffect, useRef } from 'react';
import { UserContext } from '../../../contexts/UserContext';

function DashboardLayout({ children }) {
  const accessToken = useAuth();
  const { setAccessToken, isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const dropdownMenu = useRef();

  useEffect(() => {
    const checkClickOutside = (event) => {
      if (
        isMenuOpen &&
        dropdownMenu.current &&
        dropdownMenu.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);

  if (!accessToken) return <h1>Loading...</h1>;
  spotifyApi.setAccessToken(accessToken);

  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Container>
        {accessToken && (
          <div ref={dropdownMenu} className="top-container">
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
