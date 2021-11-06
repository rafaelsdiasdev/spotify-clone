import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container } from './styles';

const SPOTIFY_LOGIN =
  'https://accounts.spotify.com/authorize?response_type=code&client_id=e57f6cd2a1df46fc8d080f45720be116&scope=user-read-playback-state&redirect_uri=http://localhost:3000/dashboard&state=kMoIYu8NbOB84LQV';

const Button = ({ logged, handleClick, backgroundColor = '#1ed760' }) => {
  return (
    <Container backgroundColor={backgroundColor} onClick={handleClick}>
      {logged ? (
        <Link href="/dashboard">Acesse o web player</Link>
      ) : (
        <Link href={SPOTIFY_LOGIN}>Entrar</Link>
      )}
    </Container>
  );
};

Button.propTypes = {
  logged: PropTypes.bool,
  handleClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  logged: false,
  handleClick: undefined,
  backgroundColor: '#1ed760',
};

export default Button;
