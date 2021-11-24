import { api } from '../../../services/api';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { useRouter } from 'next/router';

// const SPOTIFY_LOGIN =
//   'https://accounts.spotify.com/authorize?response_type=code&client_id=e57f6cd2a1df46fc8d080f45720be116&scope=user-read-recently-played%20streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3000/login&state=kMoIYu8NbOB84LQV';

const Button = ({ logged, handleClick, backgroundColor = '#1ed760' }) => {
  const router = useRouter();

  const login = async () => {
    const getUri = await api.get('/login');
    const uri = await getUri.data.uri;

    console.log(uri);

    router.push(uri);
  };

  return (
    <Container backgroundColor={backgroundColor} onClick={handleClick}>
      {logged ? (
        <Link href="/dashboard">Acesse o web player</Link>
      ) : (
        <a onClick={login}>Entrar</a>
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
