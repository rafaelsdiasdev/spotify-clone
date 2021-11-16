import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { Container } from './styles';
import ArrowLeft from '../ArrowLeft';
import ArrowRight from '../ArrowRight';

const Topbar = () => {
  const router = useRouter();
  const { search, setSearch } = useContext(UserContext);

  const pageSearch = router.pathname === '/search';

  return (
    <Container search={pageSearch}>
      <header>
        <div>
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
            placeholder="Artists, songs, or podcasts"
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
        <div className="button">Rafael</div>
      </header>
    </Container>
  );
};

export default Topbar;
