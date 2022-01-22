import { jest } from '@jest/globals';

import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Songs from '.';

const data = [
  {
    artist: 'Pearl Jam',
    title: 'Black',
    uri: 'spotify:track:5Xak5fmy089t0FYmh3VJiY',
    albumUrl: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d00004851d400d27cba05bb0545533864',
        width: 64,
      },
    ],
    duration: '5:71',
  },
];

const Component = (mockContext) => {
  return (
    <UserContext.Provider value={mockContext}>
      <Songs trackResults={data} />
    </UserContext.Provider>
  );
};

describe('Songs Component', () => {
  it('renders correctly', () => {
    const mockContext = {
      setTrack: jest.fn(),
      currentMusic: 'fake-music',
      play: false,
      setPlay: jest.fn(),
    };
    render(Component(mockContext));

    expect(screen.getByText('Black')).toBeInTheDocument();
  });

  it('should play is true', () => {
    const mockContext = {
      setTrack: jest.fn(),
      currentMusic: 'fake-music',
      play: true,
      setPlay: jest.fn(),
    };
    render(Component(mockContext));

    const button = screen.getByTestId('button');
    fireEvent.click(button);

    expect(screen.getByText('Black')).toBeInTheDocument();
  });
});
