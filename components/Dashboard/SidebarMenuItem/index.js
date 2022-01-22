import PropTypes from 'prop-types';
import Link from 'next/link';

import { Container } from './styles';
import { useEffect, useState } from 'react';

const SidebarMenuItem = ({ label, link, icon, iconActive, active }) => {
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
  }, [link, active, iconActive, icon]);

  return (
    <Container data-testid="link">
      <Link href={link}>
        <a
          data-testid="active-menu"
          className={`link ${activeMenu ? 'active-menu' : ''}`}
        >
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
  icon: PropTypes.any,
  iconActive: PropTypes.any,
};

SidebarMenuItem.defaultProps = {
  active: '/dashboard',
  link: '/dashboard',
  label: 'Home',
};

export default SidebarMenuItem;
