import Head from 'next/head';

import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Container } from './styles';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Head>
        <title>Spotify Clone</title>
      </Head>
      <Container>
        <div className="top-container">
          <Topbar />
          <Sidebar />
          {children}
          <Playing />
        </div>
      </Container>
    </>
  );
}
