import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import CardTopResult from '.';

const artistsResults = [
  {
    image: 'http://fake.url',
  },
];

const trackResults = [
  {
    artist: 'fake-artist',
    title: 'fake-title',
  },
];

const Component = (mock) => {
  return (
    <UserContext.Provider value={mock}>
      <CardTopResult
        artistsResults={artistsResults}
        trackResults={trackResults}
      />
    </UserContext.Provider>
  );
};

describe('CardTopResult', () => {
  const mockContext = {
    setTrack: jest.fn(),
    currentMusic: 'fake-music',
    play: true,
    setPlay: jest.fn(),
  };

  it('renders correctly', () => {
    render(Component(mockContext));

    expect(screen.getByText('Artist')).toBeInTheDocument();
  });

  it('should click the button when play true', () => {
    const mockContext = {
      setTrack: jest.fn(),
      currentMusic: 'fake-music',
      play: true,
      setPlay: jest.fn(),
    };

    render(Component(mockContext));

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });

  it('should click the button when play false', () => {
    const mockContext = {
      setTrack: jest.fn(),
      currentMusic: 'fake-music',
      play: false,
      setPlay: jest.fn(),
    };

    render(Component(mockContext));

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });

  it('currentMusic should be equal trackResuts.title', () => {
    const mockContext = {
      setTrack: jest.fn(),
      currentMusic: 'fake-title',
      play: false,
      setPlay: jest.fn(),
    };

    render(Component(mockContext));

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });
});
