import { useRouter } from 'next/router';
import { Container } from './styles';

const Topbar = () => {
  const router = useRouter();

  const search = router.pathname === '/search';

  return (
    <Container search={search}>
      <header>
        <input type="text" />
        <div>Rafael</div>
      </header>
    </Container>
  );
};

export default Topbar;
