import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import { useRouter } from 'next/router';
import { destroyCookie } from 'nookies';
import Nav from '.';

describe('Nav Component', () => {
  const mockContext = {
    isMenuOpen: false,
    setIsMenuOpen: jest.fn(),
  };

  it('renders correctly', () => {
    render(
      <UserContext.Provider value={mockContext}>
        <Nav
          logged={false}
          displayName={'fake-name'}
          image={'https://fake.image'}
        ></Nav>
      </UserContext.Provider>,
    );

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });
});
