import Search from '../components/Dashboard/Search';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/Search',
  component: Search,
};

const Template = (args) => (
  <Center>
    <Search {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {
  pageSearch: true,
  placeholder: 'Artists and Songs',
};
