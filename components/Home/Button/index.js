import PropTypes from 'prop-types';
import { Container } from './styles';

const Button = ({ logged, handleClick }) => {
  return (
    <Container data-testid="login" onClick={handleClick}>
      {logged ? 'Acesse o web player' : 'Entrar'}
    </Container>
  );
};

Button.propTypes = {
  logged: PropTypes.bool,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  logged: false,
};

export default Button;
