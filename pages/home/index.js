import { useRouter } from 'next/router';
import SpotifyWebApi from 'spotify-web-api-node';

import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import useAuth from '../useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

export default function Home() {
  const { logged, setLogged } = useContext(UserContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const dropdownMenu = useRef();

  const accessToken = useAuth();

  useEffect(() => {
    const checkClickOutside = (event) => {
      if (
        isMenuOpen &&
        dropdownMenu.current &&
        dropdownMenu.current.contains(event.target)
      ) {
        console.log('click');
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!accessToken) {
      setLogged(false);
      return;
    }
    spotifyApi.setAccessToken(accessToken);
    setLogged(true);
  }, [accessToken]);

  return (
    <div ref={dropdownMenu}>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header logged={logged} />
      <Hero logged={logged} />
      <Footer />
    </div>
  );
}
