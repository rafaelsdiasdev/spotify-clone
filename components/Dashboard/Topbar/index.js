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
      <div className="nav-bar">
        <a href="/">
          <svg
            height="24"
            role="img"
            width="24"
            viewBox="0 0 24 24"
            aria-labelledby="home-icon"
          >
            <title id="home-icon">Home</title>
            <path
              fill="#fff"
              d="M12 3l8 4.927V21h-5.647v-7.03H9.647V21H4V7.968L12 3zm0-1L3 7.506V22h7.579v-6.973h2.842V22H21V7.464L12 2z"
            ></path>
          </svg>
          <span>Home</span>
        </a>
        <a href="/search">
          <svg
            height="24"
            role="img"
            width="24"
            viewBox="0 0 24 24"
            aria-labelledby="search-icon"
          >
            <title id="search-icon">Search</title>
            <path
              fill="#fff"
              d="M16.387 16.623A8.47 8.47 0 0 0 19 10.5a8.5 8.5 0 1 0-8.5 8.5 8.454 8.454 0 0 0 5.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"
            ></path>
          </svg>
          <span>Search</span>
        </a>
      </div>
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
