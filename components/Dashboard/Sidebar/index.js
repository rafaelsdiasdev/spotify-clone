import Link from 'next/link';
import PropTypes from 'prop-types';

import { Container, Content, List } from './styles';
import Logo from '../../Logo';
import HomeSvg from '../../Svg/Home';
import SearchSvg from '../../Svg/Search';
import HomeActiveSvg from '../../Svg/HomeActive';
import SearchActiveSvg from '../../Svg/SearchActive';
import SidebarMenuItem from '../SidebarMenuItem';

const Sidebar = ({ active }) => {
  return (
    <Container>
      <Content>
        <div className="content__logo">
          <Link href="/home">
            <a className="link">
              <Logo fill="#fff" marginBottom={'24px'} />
            </a>
          </Link>
        </div>
        <List>
          <SidebarMenuItem
            label={'Home'}
            active={active}
            link="/dashboard"
            icon={<HomeSvg />}
            iconActive={<HomeActiveSvg />}
          />
          <SidebarMenuItem
            label={'Search'}
            active={active}
            link="/search"
            icon={<SearchSvg />}
            iconActive={<SearchActiveSvg />}
          />
        </List>
      </Content>
    </Container>
  );
};

Sidebar.propTypes = {
  active: PropTypes.string,
};

Sidebar.defaultProps = {
  active: '/dashboard',
};

export default Sidebar;
