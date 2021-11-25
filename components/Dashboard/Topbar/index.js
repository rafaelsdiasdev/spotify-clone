import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import PrivateRoute from '../../PrivateRoute';
import { Container } from './styles';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';

const Topbar = () => {
  const { session } = useContext(UserContext);
  const { search, setSearch, isMenuOpen, setIsMenuOpen } = useContext(
    UserContext,
  );

  const router = useRouter();
  const pageSearch = router.pathname === '/search';

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container search={pageSearch} isMenuOpen={isMenuOpen}>
      <header>
        <div className="nav-container">
          <div className="arrows">
            <ArrowLeft />
            <ArrowRight />
          </div>
          <div className="search">
            <input
              type="search"
              maxLength="80"
              id="search"
              name="seatch"
              value={search}
              placeholder="Artists and songs"
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="bloom">
              <span>
                <svg
                  height="24"
                  role="img"
                  width="24"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <button className="button" onClick={handleClick}>
          <figure title={session?.display_name}>
            <div>
              <img src={session?.images[0].url} alt={session?.display_name} />
            </div>
          </figure>
          <span>{session?.display_name}</span>

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
                    <span>Log out</span>
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

export default PrivateRoute(Topbar);
