import { jest } from '@jest/globals';

import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Topbar from '.';
import ProfileMenu from '../ProfileMenu';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ replace: () => '/home' }));

describe('Topbar Component', () => {
  it('renders correctly', () => {
    const mockContext = {
      isMenuOpen: false,
      setAccessToken: jest.fn(),
      setSearch: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Topbar
          displayName="fake-displayName"
          image="http://fake.image"
          pageSearch={true}
        />
      </UserContext.Provider>,
    );

    expect(screen.getByPlaceholderText('Artists and Songs'));
  });

  it('should click in ProfileMenu and logout and redirect for /home', () => {
    const mockContext = {
      isMenuOpen: false,
      setAccessToken: jest.fn(),
      setSearch: jest.fn(),
      setIsMenuOpen: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Topbar
          displayName="fake-displayName"
          image="http://fake.image"
          pageSearch={true}
        >
          <ProfileMenu
            displayName="fake-displayname"
            image="http://fake.img"
            logout={jest.fn()}
          />
        </Topbar>
      </UserContext.Provider>,
    );

    const button = screen.getByTestId('button');
    const logout = screen.getByTestId('logout');

    fireEvent.click(button);
    fireEvent.click(logout);
  });
});

describe('Topbar Component in with 900px', () => {
  window.matchMedia = jest.fn().mockReturnValue({
    matches: true,
    addListener: () => {},
    removeListener: () => {},
  });

  beforeEach(() => {
    window.matchMedia('(max-width: 900px)');
  });

  it('should render page with width to equal a 900px', () => {
    const mockContext = {
      isMenuOpen: false,
      setAccessToken: jest.fn(),
      setSearch: jest.fn(),
      setIsMenuOpen: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Topbar
          displayName="fake-displayName"
          image="http://fake.image"
          pageSearch={true}
        >
          <ProfileMenu
            displayName="fake-displayname"
            image="http://fake.img"
            logout={jest.fn()}
          />
        </Topbar>
      </UserContext.Provider>,
    );

    const close = screen.getByTestId('close');
    const back = screen.getByTestId('back');
    fireEvent.click(close);
    fireEvent.click(back);

    expect(screen.getByPlaceholderText('Search'));
  });
});
