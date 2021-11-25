import PropTypes from 'prop-types';

import Button from '../Button';
import { Container } from './styles';

const Hero = ({ logged }) => {
  return (
    <Container logged={logged}>
      <div>
        {logged ? (
          <h1>Suas músicas estão com saudade</h1>
        ) : (
          <h1>Escutar muda tudo</h1>
        )}
      </div>
      <Button logged={logged} />
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
