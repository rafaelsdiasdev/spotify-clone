import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../contexts/UserContext';
import Home from '.';

describe('Home Page', () => {
  it('renders correctly', () => {
    const mockContext = {
      logged: false,
      setLogged: jest.fn(),
      accessToken: 'fake-access-token',
      setAccessToken: jest.fn(),
      isMenuOpen: false,
      setIsMenuOpen: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Home />
      </UserContext.Provider>,
    );
  });
});
