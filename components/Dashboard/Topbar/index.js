import { useRouter } from 'next/router';
import BackIcon from '../../../public/svg/back.svg';
import ClearIcon from '../../../public/svg/clear.svg';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { destroyCookie } from 'nookies';
import PropTypes from 'prop-types';

import {
  ActionButton,
  Arrows,
  Container,
  Content,
  MobileTopbar,
} from './styles';
import RightArrow from '../../../public/svg/rightArrow.svg';
import LeftArrow from '../../../public/svg/leftArrow.svg';

import Arrow from '../Arrow';
import Search from '../Search';
import ProfileMenu from '../ProfileMenu';

const Topbar = ({ displayName, image, pageSearch }) => {
  const { isMenuOpen, setAccessToken, setSearch } = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    destroyCookie(null, 'REFRESH_TOKEN_SPOTIFY');
    setAccessToken(null);

    router.replace('/home');
  };

  return (
    <Container search={pageSearch} isMenuOpen={isMenuOpen}>
      <header>
        <Content>
          <Arrows>
            <Arrow arrow={<LeftArrow />} />
            <Arrow arrow={<RightArrow />} />
          </Arrows>
          <Search pageSearch={pageSearch} placeholder="Artists and Songs" />
        </Content>
        <ProfileMenu
          data-testid="profileMenu"
          displayName={displayName}
          image={image}
          logout={logout}
        />
      </header>
      <MobileTopbar>
        <ActionButton
          onClick={() => router.replace('/dashboard')}
          aria-label="Back"
          type="button"
          data-testid="back"
        >
          <BackIcon />
        </ActionButton>
        <Search pageSearch={pageSearch} placeholder="Search" fill="#fff" />
        <ActionButton
          data-testid="close"
          onClick={() => setSearch('')}
          aria-label="Close search"
        >
          <ClearIcon />
        </ActionButton>
      </MobileTopbar>
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

export default Topbar;
