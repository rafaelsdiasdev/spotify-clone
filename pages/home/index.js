import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Footer from '../../components/Footer';
import Header from '../../components/Home/Header';
import { destroyCookie } from 'nookies';
import Hero from '../../components/Home/Hero';
import Layout from '../../components/layout';
import spotifyApi from '../../services/spotifyApi';
import { Container } from '../../styles/home';

export default function Home() {
  const {
    logged,
    setLogged,
    accessToken,
    setAccessToken,
    isMenuOpen,
    setIsMenuOpen,
  } = useContext(UserContext);
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
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

  useEffect(async () => {
    if (!accessToken) {
      destroyCookie(null, 'TOKEN_SPOTIFY');
      setLogged(false);
      return;
    }
    spotifyApi.setAccessToken(accessToken);

    try {
      const response = await spotifyApi.getMe();
      const { display_name, images } = await response.body;
      setSession({ display_name, images });

      setLogged(true);
    } catch (error) {
      console.error('Error!!', error);
      setAccessToken(null);
      setLogged(false);
    }
  }, [accessToken, setIsMenuOpen, setAccessToken]);

  useEffect(() => {
    setUser({
      displayName: session?.display_name,
      image: session?.images[0].url,
    });
  }, [session]);

  return (
    <Container ref={dropdownMenu}>
      <Header
        displayName={user?.displayName}
        image={user?.image}
        logged={logged}
      />
      <Hero logged={logged} />
      <Footer />
    </Container>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
