import CardTopResult from '../components/Dashboard/CardTopResult';
import Center from '../components/Center';
import styled from 'styled-components';

export default {
  title: 'Components/Dashboard/CardTopResult',
  component: CardTopResult,
  // argTypes: { handleClick: { action: 'hancleClick' } },
};

const Container = styled.div`
  width: 440px;
`;

const Template = (args) => (
  <Center>
    <Container>
      <CardTopResult {...args} />
    </Container>
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Artist',
  artistsResults: [
    {
      image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
      artist: 'Coldplay',
    },
  ],
  trackResults: [
    {
      artist: 'Coldplay',
    },
  ],
};
