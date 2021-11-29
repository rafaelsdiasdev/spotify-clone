import PropTypes from 'prop-types';
import { destroyCookie } from 'nookies';

import { useContext, useRef } from 'react';
import ButtonMenu from '../ButtonMenu';
import ProfileMenu from '../ProfileMenu';
import Separator from '../Separator';
import { Container } from './styles';
import { UserContext } from '../../../contexts/UserContext';

const Nav = ({ logged, displayName, image }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const { setLogged } = useContext(UserContext);

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    destroyCookie(null, 'REFRESH_TOKEN_SPOTIFY');
    setLogged(false);
  };

  return (
    <Container>
      <ul>
        <li>
          <a href="#">Premium</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
        <li>
          <a href="#">Baixar</a>
        </li>
        <Separator />
        <li>
          <ButtonMenu
            logged={logged}
            imgSrc={image}
            imgAlt={displayName}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <ProfileMenu isMenuOpen={isMenuOpen} logout={logout} />
        </li>
      </ul>
    </Container>
  );
};

Nav.propTypes = {
  logged: PropTypes.bool,
  image: PropTypes.string,
  displayName: PropTypes.string,
};

Nav.defaultProps = {
  logged: false,
};

export default Nav;
