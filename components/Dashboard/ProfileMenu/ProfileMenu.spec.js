import { screen, render, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';

import ProfileMenu from '.';
import { UserContext } from '../../../contexts/UserContext';

describe('ProfileMenu', () => {
  it('renders correctly', () => {
    const mockContext = {
      isMenuOpen: false,
      setIsMenuOpen: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <ProfileMenu
          displayName="fake-displayname"
          image="http://fake.img"
          logout={jest.fn()}
        />
      </UserContext.Provider>,
    );

    expect(screen.getByText('fake-displayname')).toBeInTheDocument();
  });

  it('should open menu', () => {
    const mockContext = {
      isMenuOpen: true,
      setIsMenuOpen: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <ProfileMenu
          displayName="fake-displayname"
          image="http://fake.img"
          logout={jest.fn()}
        />
      </UserContext.Provider>,
    );

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });
});
