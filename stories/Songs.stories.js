import Songs from '../components/Dashboard/Songs';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/Songs',
  component: Songs,
  // argTypes: { handleClick: { action: 'hancleClick' } },
};

const Template = (args) => (
  <Center>
    <Songs {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  trackResults: [
    {
      title: 'Magic',
      artist: 'Coldplay',
      duration: '3:43',
      albumUrl: [
        undefined,
        undefined,
        {
          url: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
        },
      ],
    },
  ],
};
