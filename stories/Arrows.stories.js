import ArrowLeft from '../components/Dashboard/ArrowLeft';
import ArrowRight from '../components/Dashboard/ArrowRight';
import Center from '../components/Center';

export default {
  title: 'Components/Arrows',
  component: [ArrowLeft, ArrowRight],
  argTypes: { handleClick: { action: 'hancleClick' } },
};

const Template = (args) => (
  <Center>
    <ArrowLeft {...args} />
    <ArrowRight {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {};
