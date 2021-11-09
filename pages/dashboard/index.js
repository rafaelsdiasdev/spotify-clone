import PrivateRoute from '../../components/PrivateRoute';
import { Container } from './styles';

let Dashboard = () => {
  return <Container>Home</Container>;
};

export default PrivateRoute(Dashboard);
