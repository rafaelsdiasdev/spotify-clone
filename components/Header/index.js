import { Container } from './styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Logo from '../Logo';
import Nav from '../Nav';

const Header = ({ logged }) => {
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
        <Nav logged={logged} />
      </div>
    </Container>
  );
};

Header.propTypes = {};

export default Header;
