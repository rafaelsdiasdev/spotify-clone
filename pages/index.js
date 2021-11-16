export default function Index() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: 'http://localhost:3000/home',
      permanent: false,
    },
  };
}
