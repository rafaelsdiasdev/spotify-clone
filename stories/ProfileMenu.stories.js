import ProfileMenu from '../components/ProfileMenu';
import CenterMenu from '../components/CenterMenu';

export default {
  title: 'Components/ProfileMenu',
  component: ProfileMenu,
  argTypes: { logout: { action: 'logout' }, account: { action: 'account' } },
};

const Template = (args) => (
  <CenterMenu>
    <ProfileMenu {...args} />
  </CenterMenu>
);

export const Default = Template.bind({});
Default.args = {
  logged: false,
  isMenuOpen: true,
};
