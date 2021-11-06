import ButtonMenu from '../components/ButtonMenu';

export default {
  title: 'Components/ButtonMenu',
  component: ButtonMenu,
  argTypes: { handleClick: { action: 'hancleClick' } },
};

const Template = (args) => <ButtonMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  logged: false,
  label: 'Perfil',
  imgAlt: 'User',
  imgSrc: 'https://rsdias-storage.s3.amazonaws.com/avatar.png',
};
