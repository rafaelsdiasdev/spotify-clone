import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
