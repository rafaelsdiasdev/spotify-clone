import PropTypes from 'prop-types';
import Link from 'next/link';

import { Container } from './styles';
import { useEffect, useState } from 'react';

const SidebarMenuItem = ({
  label,
  link,
  icon = 'Icon',
  iconActive = 'iconActive',
  active,
}) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [handleIcon, setHandleIcon] = useState(null);

  useEffect(() => {
    if (active === link) {
      setActiveMenu(true);
      setHandleIcon(iconActive);
    } else {
      setActiveMenu(false);
      setHandleIcon(icon);
    }
  }, [link, active]);

  return (
    <Container>
      <Link href={link} onClick={(event) => event.preventDefault()}>
        <a className={`link ${activeMenu ? 'active-menu' : ''}`}>
          {handleIcon}
          <span>{label}</span>
        </a>
      </Link>
    </Container>
  );
};

SidebarMenuItem.propTypes = {
  active: PropTypes.string,
  label: PropTypes.string,
  link: PropTypes.string,
  svg: PropTypes.element,
  svgActive: PropTypes.element,
};

SidebarMenuItem.defaultProps = {
  active: '/dashboard',
  link: '/dashboard',
  label: 'Home',
};

export default SidebarMenuItem;
