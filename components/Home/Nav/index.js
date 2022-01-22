import PropTypes from 'prop-types';
import { destroyCookie } from 'nookies';

import { useContext } from 'react';
import ProfileMenu from '../ProfileMenu';
import Separator from '../Separator';
import { Container, List, ListItem } from './styles';
import { UserContext } from '../../../contexts/UserContext';

const Nav = ({ logged, displayName, image }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const { setLogged } = useContext(UserContext);

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    destroyCookie(null, 'REFRESH_TOKEN_SPOTIFY');
    setLogged(false);
    setIsMenuOpen(false);
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <List>
        <ListItem>
          <ProfileMenu
            imgSrc={image}
            imgAlt={displayName}
            logged={logged}
            logout={logout}
          />
        </ListItem>
      </List>
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
