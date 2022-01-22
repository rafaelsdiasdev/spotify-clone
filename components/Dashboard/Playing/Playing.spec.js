import { jest } from '@jest/globals';

import { render } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Playing from '.';

const mockContext = {
  track: 'fake-track',
  initialTracks: false,
  setInitialTracks: jest.fn(),
  setCurrentMusic: jest.fn(),
  play: false,
  setPlay: jest.fn(),
  setMusicTitle: jest.fn(),
  setCurrentArtist: jest.fn(),
  active: false,
  setActive: jest.fn(),
};

describe('Playing Component', () => {
  it.skip('renders correctly', () => {
    render(
      <UserContext.Provider value={mockContext}>
        <Playing accessToken="fake-token" />
      </UserContext.Provider>,
    );
  });
});
