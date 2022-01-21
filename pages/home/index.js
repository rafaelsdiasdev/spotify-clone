import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import nookies from 'nookies';

import Footer from '../../components/Footer';
import Header from '../../components/Home/Header';
import Hero from '../../components/Home/Hero';
import Layout from '../../components/layout';
import spotifyApi from '../../services/spotifyApi';
import { Container } from '../../styles/home';

export default function Home({ display_name, images }) {
  const { logged, setLogged, setAccessToken, isMenuOpen, setIsMenuOpen } =
    useContext(UserContext);

  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const dropdownMenu = useRef();

  const getMe = async () => {
    if (display_name && images) {
      setSession({ display_name, images });
      setLogged(true);
    } else {
      setAccessToken(null);
      setLogged(false);
    }
  };

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
    getMe();
  }, []);

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

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const accessToken = cookies.TOKEN_SPOTIFY;

  try {
    spotifyApi.setAccessToken(accessToken);
    const response = await spotifyApi.getMe();
    const { display_name, images } = await response.body;

    return {
      props: {
        display_name,
        images,
      },
    };
  } catch (error) {
    nookies.destroy(context, 'TOKEN_SPOTIFY');
    return {
      props: {
        display_name: null,
        images: null,
      },
    };
  }
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
