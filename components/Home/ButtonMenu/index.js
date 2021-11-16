import PropTypes from 'prop-types';
import { Container } from './styles';
import Image from 'next/image';
import Link from 'next/link';

const SPOTIFY_LOGIN =
  'https://accounts.spotify.com/authorize?response_type=code&client_id=e57f6cd2a1df46fc8d080f45720be116&scope=user-read-recently-played%20streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state&redirect_uri=http://localhost:3000/login&state=kMoIYu8NbOB84LQV';

const ButtonMenu = ({
  imgSrc,
  imgAlt,
  label,
  logged,
  setIsMenuOpen,
  isMenuOpen,
}) => {
  const handleClick = () => {
    if (!logged) {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container logged={logged} onClick={handleClick} isMenuOpen={isMenuOpen}>
      {logged ? (
        <>
          <Image height="40" width="40" src={imgSrc} alt={imgAlt} />
          <div>
            <span>{label}</span>
            <svg viewBox="0 0 1024 1024">
              <path d="M476.455 806.696L95.291 425.532Q80.67 410.911 80.67 390.239t14.621-34.789 35.293-14.117 34.789 14.117L508.219 698.8l349.4-349.4q14.621-14.117 35.293-14.117t34.789 14.117 14.117 34.789-14.117 34.789L546.537 800.142q-19.159 19.159-38.318 19.159t-31.764-12.605z"></path>
            </svg>
          </div>
        </>
      ) : (
        <p>
          <Link href={SPOTIFY_LOGIN}>Entrar</Link>
        </p>
      )}
    </Container>
  );
};

ButtonMenu.propTypes = {
  logged: PropTypes.bool,
  label: PropTypes.string,
  imgAlt: PropTypes.string,
  handleClick: PropTypes.func,
  imgSrc: PropTypes.string,
};

ButtonMenu.defaultProps = {
  logged: false,
  label: 'Perfil',
  imgAlt: 'User',
  handleClick: undefined,
  imgSrc: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
};

export default ButtonMenu;
