import { render, screen } from '@testing-library/react';
import Home from '.';

describe('Home Svg Component', () => {
  it('renders correctly', () => {
    render(<Home />);

    expect(screen.getByRole('img'));
  });
});
