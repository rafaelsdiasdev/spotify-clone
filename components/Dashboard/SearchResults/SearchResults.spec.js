import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../../../contexts/UserContext';
import SearchResults from '.';

describe('SearchResults Component', () => {
  const mockContext = {
    setTrack: jest.fn(),
    currentMusic: 'fake-music',
    play: false,
    setPlay: jest.fn(),
  };
  it('renders correctly', () => {
    render(
      <UserContext.Provider value={mockContext}>
        <SearchResults trackResults={[]} artistsResults={[]} />
      </UserContext.Provider>,
    );

    expect(screen.getByText('Top Result')).toBeInTheDocument();
  });
});
