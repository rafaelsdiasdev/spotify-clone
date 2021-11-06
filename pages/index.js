import Head from 'next/head';
import { parseCookies } from 'nookies';
import styles from '../styles/Home.module.css';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Spotify Clone</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);

  if (cookies && cookies.TOKEN_SPOTIFY) {
    return {
      props: {
        TOKEN_SPOTIFY: cookies.TOKEN_SPOTIFY,
      },
      redirect: {
        destination: 'http://localhost:3000/dashboard',
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: 'http://localhost:3000/home',
        permanent: false,
      },
    };
  }
}
