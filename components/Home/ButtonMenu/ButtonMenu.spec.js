/* eslint-disable */
import { jest } from '@jest/globals';

import { screen, render, fireEvent } from '@testing-library/react';
import ButtonMenu from '.';

jest.mock('next/image', () => {
  return (props) => {
    return <img {...props} />;
  };
});

describe('ButtonMenu Component', () => {
  it('renders correctly and not logged', () => {
    render(
      <ButtonMenu
        imgSrc="http://fake-img"
        imgAlt="fake-imgalt"
        logged={false}
        isMenuOpen={jest.fn()}
      />,
    );

    expect(screen.getByText('Entrar')).toBeInTheDocument();

    const login = screen.getByTestId('login');
    fireEvent.click(login);
  });

  it('renders correctly and logged', () => {
    render(
      <ButtonMenu
        imgSrc="http://fake-img"
        imgAlt="fake-imgalt"
        logged={true}
        isMenuOpen={jest.fn()}
      />,
    );

    expect(screen.getByText('Perfil'));
  });
});
