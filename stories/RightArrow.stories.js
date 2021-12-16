import Arrow from '../components/Dashboard/Arrow';
import Center from '../components/Center';
import rightArrow from '../public/svg/rightArrow.svg';

export default {
  title: 'Components/Home/Arrows/Right',
  component: [Arrow],
};

const Template = (args) => (
  <Center>
    <Arrow {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  arrow: rightArrow,
};
