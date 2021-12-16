import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { api } from '../../../services/api';

import Button from '../Button';
import { Container, Content } from './styles';

const Hero = ({ logged }) => {
  const router = useRouter();

  const handleClick = async () => {
    if (logged) {
      router.push('/dashboard');
    } else {
      const getUri = await api.get('/login');
      const uri = await getUri.data.uri;

      router.push(uri);
    }
  };

  return (
    <Container>
      <Content logged={logged}>
        {logged ? (
          <h1 className="content__title">Suas músicas estão com saudade</h1>
        ) : (
          <h1 className="content__title">Escutar muda tudo</h1>
        )}
      </Content>

      <Button handleClick={handleClick} logged={logged} />
    </Container>
  );
};

Hero.propTypes = {
  logged: PropTypes.bool,
};

Hero.defaultProps = {
  logged: false,
};

export default Hero;
