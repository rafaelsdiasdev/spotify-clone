import { Provider } from 'next-auth/client';
import Layout from '../components/layout';

import { UserStorage } from '../contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <UserStorage>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserStorage>
    </Provider>
  );
}

export default MyApp;
