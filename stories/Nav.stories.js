import Nav from '../components/Home/Nav';

export default {
  title: 'Components/Home/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  logged: false,
  image: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
  displayName: '',
};
