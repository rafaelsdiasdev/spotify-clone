import { Provider } from 'next-auth/client';
import DashboardLayout from '../components/Dashboard/Layout';

import { UserStorage } from '../contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => <DashboardLayout>{page}</DashboardLayout>);

  return (
    <Provider session={pageProps.session}>
      <UserStorage>{getLayout(<Component {...pageProps} />)}</UserStorage>
    </Provider>
  );
}

export default MyApp;
