import Head from 'next/head';

import spotifyApi from '../../../services/spotifyApi';
import Loading from '../../Loading';

import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import MainView from '../MainView';
import { Container } from './styles';

import useAuth from '../../../hooks/useAuth';
import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useRouter } from 'next/router';

function DashboardLayout({ children }) {
  const router = useRouter();
  const accessToken = useAuth();
  const {
    setAccessToken,
    isMenuOpen,
    setIsMenuOpen,
    session,
    musicTitle,
  } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const active = router?.pathname;
  const pageSearch = active === '/search';

  const dropdownMenu = useRef();

  useEffect(() => {
    if (session) {
      const { display_name, images } = session;
      setUser({
        displayName: display_name,
        image: images[0].url,
      });
    }
  }, [session]);

  // const { display_name, images } = session;

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

  if (!accessToken) return <Loading />;
  spotifyApi.setAccessToken(accessToken);

  return (
    <>
      <Head>
        <title>{musicTitle ? musicTitle : 'Spotify Clone'}</title>
      </Head>
      <Container>
        {accessToken && (
          <div ref={dropdownMenu} className="content">
            <Topbar
              pageSearch={pageSearch}
              displayName={user.displayName}
              image={user.image}
            />
            <Sidebar active={active} />
            <MainView>{children}</MainView>
            <Playing accessToken={accessToken} />
          </div>
        )}
      </Container>
    </>
  );
}

export default DashboardLayout;
