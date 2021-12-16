import PropTypes from 'prop-types';
import { Container } from './styles';
import { useRouter } from 'next/router';

const Button = ({ logged, handleClick, backgroundColor = '#1ed760' }) => {
  return (
    <Container backgroundColor={backgroundColor} onClick={handleClick}>
      {logged ? 'Acesse o web player' : 'Entrar'}
    </Container>
  );
};

Button.propTypes = {
  logged: PropTypes.bool,
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  logged: false,
  backgroundColor: '#1ed760',
};

export default Button;
