import { Container } from './styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Logo from '../../Logo';
import Nav from '../Nav';

const Header = ({ logged, displayName, image }) => {
  return (
    <Container>
      <div className="content">
        <div className="logo">
          <Link href="/dashboard">
            <a>
              <span>
                <Logo fill="#fff" />
              </span>
            </a>
          </Link>
        </div>
        <Nav displayName={displayName} image={image} logged={logged} />
      </div>
    </Container>
  );
};

Header.propTypes = {
  logged: PropTypes.bool,
  image: PropTypes.string,
  displayName: PropTypes.string,
};

Header.defaultProps = {
  logged: false,
};

export default Header;
