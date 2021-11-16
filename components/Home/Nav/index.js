import PropTypes from 'prop-types';
import { destroyCookie } from 'nookies';

import { useContext, useRef } from 'react';
import ButtonMenu from '../ButtonMenu';
import ProfileMenu from '../ProfileMenu';
import Separator from '../Separator';
import { Container } from './styles';
import { parseCookies } from 'nookies';
import { UserContext } from '../../../contexts/UserContext';

const Nav = ({ logged, session }) => {
  const dropdownRef = useRef(null);

  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const { setLogged } = useContext(UserContext);

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    setLogged(false);
  };

  return (
    <Container ref={dropdownRef}>
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
            imgSrc={session?.images[0].url}
            imgAlt={session?.display_name}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <ProfileMenu isMenuOpen={isMenuOpen} logout={logout} />
        </li>
      </ul>
    </Container>
  );
};

Nav.propTypes = {};

export default Nav;
