import Topbar from '../components/Dashboard/Topbar';
import styled from 'styled-components';

export default {
  title: 'Components/Dashboard/Topbar',
  component: Topbar,
  // argTypes: { handlePlay: { control: 'clicked' } },
  // parameters: {
  //   actions: {
  //     handles: ['click button'],
  //   },
  // },
};

const Contaner = styled.div`
  margin: 0 -16px 0 0;
`;

const Template = (args) => (
  <Contaner>
    <Topbar {...args} />;
  </Contaner>
);

export const Default = Template.bind({});
Default.args = {
  displayName: 'Mel',
  image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
  pageSearch: true,
};
