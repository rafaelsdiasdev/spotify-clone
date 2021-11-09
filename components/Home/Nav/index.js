import PropTypes from 'prop-types';
import SpotifyWebApi from 'spotify-web-api-node';
import { destroyCookie } from 'nookies';

import { useContext, useEffect, useRef, useState } from 'react';
import ButtonMenu from '../ButtonMenu';
import ProfileMenu from '../ProfileMenu';
import Separator from '../Separator';
import { Container } from './styles';
import useAuth from '../../../pages/useAuth';
import { UserContext } from '../../../contexts/UserContext';

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Nav = ({ logged }) => {
  const dropdownRef = useRef(null);

  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);
  const [session, setSession] = useState(null);
  const { setLogged } = useContext(UserContext);

  const accessToken = useAuth();

  useEffect(() => {
    if (!accessToken) {
      return;
    }
    spotifyApi.setAccessToken(accessToken);
    spotifyApi.getMe().then((res) => setSession(res.body));
  }, [accessToken]);

  const account = () => {};

  const logout = () => {
    destroyCookie(null, 'TOKEN_SPOTIFY');
    setLogged(false);
  };

  return (
    <Container ref={dropdownRef}>
      <ul>
        <li>
          <a href="#">Premium</a>
        </li>
        <li>
          <a href="#">Suporte</a>
        </li>
        <li>
          <a href="#">Baixar</a>
        </li>
        <Separator />
        <li>
          <ButtonMenu
            logged={logged}
            imgSrc={session?.images[0].url}
            imgAlt={session?.display_name}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <ProfileMenu
            isMenuOpen={isMenuOpen}
            account={account}
            logout={logout}
          />
        </li>
      </ul>
    </Container>
  );
};

Nav.propTypes = {};

export default Nav;
