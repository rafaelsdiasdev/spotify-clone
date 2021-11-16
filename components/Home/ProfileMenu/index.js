import { Container } from './styles';
import PropTypes from 'prop-types';

const ProfileMenu = ({ logout, isMenuOpen }) => {
  if (!isMenuOpen) {
    return null;
  }

  return (
    <Container>
      <ul className="account-menu">
        <li className="account-menu-item">Conta</li>
        <li className="account-menu-item" onClick={logout}>
          Sair
        </li>
      </ul>
    </Container>
  );
};

ProfileMenu.propTypes = {
  logout: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

ProfileMenu.defaultProps = {
  logged: false,
  isMenuOpen: true,
};

export default ProfileMenu;
