import { Menu, List, ListItem, Container } from './styles';
import PropTypes from 'prop-types';
import ButtonMenu from '../ButtonMenu';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';

const ProfileMenu = ({
  imgSrc,
  imgAlt,

  logged,
  logout,
}) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);

  const handleClick = () => {
    if (!logged) {
      return;
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container onClick={handleClick}>
      <ButtonMenu
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        logged={logged}
        isMenuOpen={isMenuOpen}
      />
      <Menu isMenuOpen={isMenuOpen}>
        <List>
          <ListItem>Conta</ListItem>
          <ListItem onClick={logout}>Sair</ListItem>
        </List>
      </Menu>
    </Container>
  );
};

ProfileMenu.propTypes = {
  logged: PropTypes.bool.isRequired,
  imgSrc: PropTypes.string,
};

ProfileMenu.defaultProps = {
  logged: false,
};

export default ProfileMenu;
