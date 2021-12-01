import { useRouter } from 'next/router';
import { Container } from './styles';

const MainView = ({ children }) => {
  const router = useRouter();

  const pageSearch = router.pathname === '/search';
  return <Container search={pageSearch}>{children}</Container>;
};

export default MainView;
