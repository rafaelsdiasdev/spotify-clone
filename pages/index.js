import env from '../environment';

export default function Index() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: `${env.API_URL}/home`,
      permanent: false,
    },
  };
}
