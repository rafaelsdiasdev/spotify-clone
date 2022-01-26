import { jest } from '@jest/globals';

import { render } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Playing from '.';

jest.mock('react-spotify-web-playback');

describe('Playing Component', () => {
  it('renders correctly and initial track true', () => {
    const mockContext = {
      track: 'fake-track',
      initialTracks: true,
      setInitialTracks: jest.fn(),
      setCurrentMusic: jest.fn(),
      play: false,
      setPlay: jest.fn(),
      setMusicTitle: jest.fn(),
      setCurrentArtist: jest.fn(),
      active: false,
      setActive: jest.fn(),
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Playing accessToken="fake-token" />
      </UserContext.Provider>,
    );
  });

  it('renders correctly and initial track false', () => {
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

    render(
      <UserContext.Provider value={mockContext}>
        <Playing accessToken="fake-token" />
      </UserContext.Provider>,
    );
  });

  // it('play music', () => {
  //   const mockContext = {
  //     track: 'fake-track',
  //     initialTracks: false,
  //     setInitialTracks: jest.fn(),
  //     setCurrentMusic: jest.fn(),
  //     play: true,
  //     setPlay: jest.fn(),
  //     setMusicTitle: jest.fn(),
  //     setCurrentArtist: jest.fn(),
  //     active: false,
  //     setActive: jest.fn(),
  //   };

  //   render(
  //     <UserContext.Provider value={mockContext}>
  //       <Playing accessToken="fake-token" />
  //     </UserContext.Provider>,
  //   );
  // });
});
