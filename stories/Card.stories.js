import Card from '../components/Dashboard/Card';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/Card',
  component: Card,
  argTypes: { handlePlay: { control: 'clicked' } },
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
};

const Template = (args) => (
  <Center>
    <Card {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Coldplay',
  image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
  type: 'Artist',
};
