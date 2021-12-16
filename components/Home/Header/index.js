import { Container, Content } from './styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Logo from '../../Logo';
import Nav from '../Nav';

const Header = ({ logged, displayName, image }) => {
  return (
    <Container>
      <Content>
        <div className="logo">
          <Link href="/dashboard">
            <a className="link">
              <span>
                <Logo fill="#fff" />
              </span>
            </a>
          </Link>
        </div>
        <Nav displayName={displayName} image={image} logged={logged} />
      </Content>
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
