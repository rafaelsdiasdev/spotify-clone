import Sidebar from '../components/Dashboard/Sidebar';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/Sidebar',
  component: Sidebar,
  // argTypes: { handleClick: { action: 'hancleClick' } },
};

const Template = (args) => (
  <Center>
    <Sidebar {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {};
