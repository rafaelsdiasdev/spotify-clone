import ProfileMenu from '../components/Dashboard/ProfileMenu';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/ProfileMenu',
  component: ProfileMenu,
  argTypes: {
    logout: { action: 'logout' },
  },
};

const Template = (args) => (
  <Center>
    <ProfileMenu {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  displayName: 'Rafael',
  image: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
};
