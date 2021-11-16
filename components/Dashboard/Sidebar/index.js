import Link from 'next/link';

import { Container } from './styles';
import Logo from '../../Logo';
import HomeSvg from '../../Svg/Home';
import SearchSvg from '../../Svg/Search';
import { useRouter } from 'next/router';
import HomeActiveSvg from '../../Svg/HomeActive';
import SearchActiveSvg from '../../Svg/SearchActive';

const Sidebar = () => {
  const router = useRouter();

  return (
    <Container>
      <div>
        <div className="logo">
          <Link href="/dashboard">
            <a>
              <Logo fill="#fff" />
            </a>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/dashboard">
              <a
                className={`${
                  router.pathname === '/dashboard' && 'active-menu'
                }`}
              >
                {router.pathname === '/dashboard' ? (
                  <HomeActiveSvg />
                ) : (
                  <HomeSvg />
                )}
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/search">
              <a
                className={`${router.pathname === '/search' && 'active-menu'}`}
              >
                {router.pathname === '/search' ? (
                  <SearchActiveSvg />
                ) : (
                  <SearchSvg />
                )}
                <span>Search</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
