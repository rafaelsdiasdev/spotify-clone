import PropTypes from 'prop-types';
import { BtnMenu, Context, Mobile } from './styles';
import Image from 'next/image';
import DownArrow from '../../../public/svg/downArrow.svg';
import { api } from '../../../services/api';
import { useRouter } from 'next/router';

const ButtonMenu = ({ imgSrc, imgAlt, label, logged, isMenuOpen }) => {
  const router = useRouter();

  const login = async () => {
    const getUri = await api.get('/login');
    const uri = await getUri.data.uri;

    router.push(uri);
  };

  return (
    <BtnMenu logged={logged}>
      {logged ? (
        <>
          <Context isMenuOpen={isMenuOpen}>
            {imgSrc && (
              <Image
                className="menu__photo"
                height="40"
                width="40"
                src={imgSrc}
                alt={imgAlt}
              />
            )}
            <span>{label}</span>
            <DownArrow />
          </Context>

          <Mobile isMenuOpen={isMenuOpen}>
            <span className="menu-hamburguer"></span>
            <span className="menu-hamburguer"></span>
            <span className="menu-hamburguer"></span>
          </Mobile>
        </>
      ) : (
        <Context>
          <p className="paragraph">
            <a data-testid="login" className="link" onClick={login}>
              Entrar
            </a>
          </p>
        </Context>
      )}
    </BtnMenu>
  );
};

ButtonMenu.propTypes = {
  logged: PropTypes.bool,
  label: PropTypes.string,
  imgAlt: PropTypes.string,
  handleClick: PropTypes.func,
  imgSrc: PropTypes.string,
};

ButtonMenu.defaultProps = {
  logged: false,
  label: 'Perfil',
  imgAlt: 'User',
  imgSrc: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
};

export default ButtonMenu;
