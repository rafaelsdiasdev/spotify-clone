import { render, screen } from '@testing-library/react';
import Search from '.';

describe('Search Svg Component', () => {
  it('renders correctly', () => {
    render(<Search />);

    expect(screen.getByRole('img'));
  });
});
