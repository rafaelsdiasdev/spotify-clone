import DashboardLayout from '../components/Dashboard/Layout';
import Layout from '../components/layout';

import { UserStorage } from '../contexts/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => <DashboardLayout>{page}</DashboardLayout>);

  return <UserStorage>{getLayout(<Component {...pageProps} />)}</UserStorage>;
}

export default MyApp;
