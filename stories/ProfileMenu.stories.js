import ProfileMenu from '../components/Home/ProfileMenu';
import CenterMenu from '../components/CenterMenu';
import Center from '../components/Center';
import '../styles/globals.css';

export default {
  title: 'Components/Home/ProfileMenu',
  component: ProfileMenu,
};

const Template = (args) => (
  <Center>
    <ProfileMenu {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  logged: false,
  imgSrc: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
};
