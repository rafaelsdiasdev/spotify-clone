import Logo from '../components/Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  fill: '#fff',
};
