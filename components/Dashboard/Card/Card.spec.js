import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import Card from '.';
import * as nextRouter from 'next/router';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ push: '/' }));

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

    const button = screen.getByTestId('button');
    fireEvent.click(button);
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

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });

  it('no data', () => {
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
          card={undefined}
          wrapper="fake-wrapper"
        ></Card>
      </UserContext.Provider>

);

  const button = screen.getByTestId('button');
  fireEvent.click(button);
  expect(nextRouter.useRouter).toHaveBeenCalled()
  });
});
