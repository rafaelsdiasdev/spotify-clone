import Hero from '../components/Home/Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  logged: false,
};
