import Playing from '../Playing';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import { Container } from './styles';

export default function DashboardLayout({ children }) {
  return (
    <Container>
      <div className="top-container">
        <Topbar />
        <Sidebar />
        {children}
        <Playing />
      </div>
    </Container>
  );
}
