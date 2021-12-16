import SidebarMenuItem from '../components/Dashboard/SidebarMenuItem';
import Center from '../components/Center';

export default {
  title: 'Components/Dashboard/SidebarMenuItem',
  component: SidebarMenuItem,
  // argTypes: { handleClick: { action: 'hancleClick' } },
  // argTypes: {
  //   link: {
  //     options: ['/dashboard', '/search'],
  //     control: { type: 'radio' },
  //   },
  // },
};

const Template = (args) => (
  <Center>
    <SidebarMenuItem {...args} />
  </Center>
);

export const Deactive = Template.bind({});
Deactive.args = {
  active: '/search',
  label: 'Home',
  link: '/dashboard',
  svg: React.createElement('h1', { className: 'icon' }, 'Icon'),
  svgActive: React.createElement('h1', { className: 'selected' }, 'Selected'),
};

export const Active = Template.bind({});
Active.args = {
  active: '/dashboard',
  label: 'Home',
  link: '/dashboard',
  svg: React.createElement('h1', { className: 'icon' }, 'Icon'),
  svgActive: React.createElement('h1', { className: 'selected' }, 'Selected'),
};
