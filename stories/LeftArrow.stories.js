import Arrow from '../components/Dashboard/Arrow';
import Center from '../components/Center';
import leftArrow from '../public/svg/leftArrow.svg';

export default {
  title: 'Components/Home/Arrows/Left',
  component: [Arrow],
};

const Template = (args) => (
  <Center>
    <Arrow {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  arrow: leftArrow,
};
