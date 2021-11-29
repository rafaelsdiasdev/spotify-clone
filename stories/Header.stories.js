import Header from '../components/Home/Header';

export default {
  title: 'Components/Home/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logged: false,
  image: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
  displayName: '',
};
