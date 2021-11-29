import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { destroyCookie } from 'nookies';
import PropTypes from 'prop-types';

import PrivateRoute from '../../PrivateRoute';
import { Container } from './styles';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';
import Search from '../Search';

const Topbar = ({ displayName, image, pageSearch }) => {
  const { isMenuOpen, setIsMenuOpen, setAccessToken } = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    destroyCookie(null, 'REFRESH_TOKEN_SPOTIFY');
    setAccessToken(null);

    router.replace('/home');
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container isMenuOpen={isMenuOpen}>
      <header>
        <div className="nav-container">
          <div className="arrows">
            <ArrowLeft />
            <ArrowRight />
          </div>
          <Search pageSearch={pageSearch} placeholder="Artists and Songs" />
        </div>
        <button className="button" onClick={handleClick}>
          <figure title={displayName}>
            <div>
              <img src={image} alt={displayName} />
            </div>
          </figure>
          <span>{displayName}</span>

          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            color="#fff"
            fill="#fff"
          >
            <path d="M3 6l5 5.794L13 6z"></path>
          </svg>
        </button>
        <div className="menu-container">
          <div className="menu-context">
            <div className="menu">
              <ul>
                <li>
                  <button>
                    <a>
                      <span>Profile</span>
                    </a>
                  </button>
                </li>
                <li>
                  <button>
                    <span onClick={logout}>Log out</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

Topbar.propTypes = {
  displayName: PropTypes.string,
  image: PropTypes.string,
  pageSearch: PropTypes.bool,
};

Topbar.defaultProps = {
  pageSearch: false,
};

export default PrivateRoute(Topbar);
