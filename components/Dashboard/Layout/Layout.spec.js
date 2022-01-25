import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';

import Layout from '.';

const mockContext = {
  setAccessToken: jest.fn(),
  isMenuOpen: false,
  setIsMenuOpen: jest.fn(),
  session: {
    displayName: 'fake-name',
    images: [],
  },
  musicTitle: 'fake-music',
};

describe('Layout Component', () => {
  it('renders correctly', () => {
    render(
      <UserContext.Provider value={mockContext}>
        <Layout />
      </UserContext.Provider>,
    );
  });
});
