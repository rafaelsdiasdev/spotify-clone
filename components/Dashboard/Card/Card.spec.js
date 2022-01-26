import { jest } from '@jest/globals';

import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Card from '.';
import { useRouter } from 'next/router';
import Play from '../../../utils/Play';

jest.mock('next/router');
jest.mock('../../../utils/Play');

useRouter.mockImplementation(() => {
  return {
    push: jest.fn(),
  };
});

Play.mockImplementation(() => jest.fn());

const data = [
  {
    name: 'fake-name',
    image: 'fake-image',
    type: 'fake-type',
    handlePlay: jest.fn(),
  },
];

describe('Card Component', () => {
  it('renders correctly', () => {
    const mockContext = {
      setTrack: jest.fn(),
      play: true,
      setPlay: jest.fn(),
      currentArtist: 'fake-artist',
      currentMusic: 'fake-music',
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Card
          id="fake-id"
          uri="fake-uri"
          name="fake-name"
          type="fake-type"
          image="http://fake.url"
          card={data}
          wrapper="fake-wrapper"
        ></Card>
      </UserContext.Provider>,
    );

    expect(screen.getByText('fake-name')).toBeInTheDocument();
  });

  it("should click the button when you don't have the id", () => {
    const mockContext = {
      setTrack: jest.fn(),
      play: false,
      setPlay: jest.fn(),
      currentArtist: 'fake-artist',
      currentMusic: 'fake-music',
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Card
          id={undefined}
          uri="fake-uri"
          name="fake-name"
          type="fake-type"
          image="http://fake.url"
          card={data}
          wrapper="fake-wrapper"
        ></Card>
      </UserContext.Provider>,
    );

    const button = screen.getByTestId('play-button');
    fireEvent.click(button);

    expect(Play).toHaveBeenCalledTimes(1);
  });

  it('should click the button when you have the id', () => {
    const mockContext = {
      setTrack: jest.fn(),
      play: true,
      setPlay: jest.fn(),
      currentArtist: 'fake-artist',
      currentMusic: 'fake-music',
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Card
          id="fake-id"
          uri="fake-uri"
          name="fake-artist"
          type="fake-type"
          image="http://fake.url"
          card={data}
          wrapper="fake-wrapper"
        ></Card>
      </UserContext.Provider>,
    );

    const button = screen.getByTestId('play-button');
    fireEvent.click(button);

    expect(Play).toHaveBeenCalledTimes(1);
  });

  it('no data', () => {
    const mockContext = {
      setTrack: jest.fn(),
      play: false,
      setPlay: jest.fn(),
      currentArtist: null,
      currentMusic: null,
    };

    render(
      <UserContext.Provider value={mockContext}>
        <Card
          id="fake-id"
          uri="fake-uri"
          name="fake-artist"
          type="fake-type"
          image="http://fake.url"
          card={undefined}
          wrapper="fake-wrapper"
        ></Card>
      </UserContext.Provider>,
    );

    expect(useRouter).toHaveBeenCalledTimes(1);
  });
});
