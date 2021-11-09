import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Head from 'next/head';

import Footer from '../../components/Footer';
import Header from '../../components/Home/Header';
import Hero from '../../components/Home/Hero';
import useAuth from '../useAuth';
import Layout from '../../components/layout';

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
    setLogged(true);
  }, [accessToken]);

  return (
    <div ref={dropdownMenu}>
      {/* <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Header logged={logged} />
      <Hero logged={logged} />
      <Footer />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
