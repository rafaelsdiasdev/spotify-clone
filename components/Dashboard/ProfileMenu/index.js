import Image from 'next/image';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import {
  Button,
  BtnMenu,
  List,
  ListItem,
  Menu,
  MenuContainer,
  MenuContext,
  Container,
} from './styles';

import upArrowIcon from '../../../public/svg/upArrowFull.svg';
import downArrowIcon from '../../../public/svg/downArrowFull.svg';

const ProfileMenu = ({ displayName, image, logout }) => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserContext);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <BtnMenu>
        <button className="button" onClick={handleClick}>
          {image && (
            <Image src={image} width={28} height={28} alt={displayName} />
          )}

          <span>{displayName}</span>

          {isMenuOpen ? (
            <Image src={upArrowIcon} width="16" height="16" alt="up arrow" />
          ) : (
            <Image
              src={downArrowIcon}
              width="16"
              height="16"
              alt="down arrow"
            />
          )}
        </button>
      </BtnMenu>
      <MenuContainer isMenuOpen={isMenuOpen}>
        <MenuContext>
          <Menu>
            <List>
              <ListItem>
                <Button>
                  <a>
                    <span>Profile</span>
                  </a>
                </Button>
              </ListItem>
              <ListItem>
                <Button>
                  <span onClick={logout}>Log out</span>
                </Button>
              </ListItem>
            </List>
          </Menu>
        </MenuContext>
      </MenuContainer>
    </Container>
  );
};

ProfileMenu.propTypes = {
  displayName: PropTypes.string,
  image: PropTypes.string,
  logout: PropTypes.func,
};

ProfileMenu.defaultProps = {};

export default ProfileMenu;
