import env from '../environment';

export default function Index() {
  console.log(`${env.API_URL}/home`);
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
