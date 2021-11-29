import Button from '../components/Home/Button';
import Center from '../components/Center';

export default {
  title: 'Components/Home/Button',
  component: Button,
  argTypes: { handleClick: { action: 'hancleClick' } },
};

const Template = (args) => (
  <Center>
    <Button {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  logged: false,
  backgroundColor: '#1ed760',
};
