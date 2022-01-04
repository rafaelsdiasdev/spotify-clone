import { useRouter } from 'next/router';
import Image from 'next/image';
import backIcon from '../../../public/svg/back.svg';
import clearIcon from '../../../public/svg/clear.svg';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { destroyCookie } from 'nookies';
import PropTypes from 'prop-types';

import PrivateRoute from '../../PrivateRoute';
import {
  ActionButton,
  Arrows,
  Container,
  Content,
  MobileTopbar,
} from './styles';
import rightArrow from '../../../public/svg/rightArrow.svg';
import leftArrow from '../../../public/svg/leftArrow.svg';

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
            <Arrow arrow={leftArrow} />
            <Arrow arrow={rightArrow} />
          </Arrows>
          <Search pageSearch={pageSearch} placeholder="Artists and Songs" />
        </Content>
        <ProfileMenu displayName={displayName} image={image} logout={logout} />
      </header>
      <MobileTopbar>
        <ActionButton
          onClick={() => router.replace('/dashboard')}
          aria-label="Back"
          type="button"
        >
          <Image src={backIcon} width="24" height="24" alt="back" />
        </ActionButton>
        <Search pageSearch={pageSearch} placeholder="Search" fill="#fff" />
        <ActionButton onClick={() => setSearch('')} aria-label="Close search">
          <Image src={clearIcon} width="24" height="24" />
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

export default PrivateRoute(Topbar);
