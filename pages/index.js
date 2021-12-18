// import env from '../environment';

export default function Index() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `https://spotify.rafaelsdias.dev/home`,
      permanent: false,
    },
  };
}
