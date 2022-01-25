import { render, screen } from '@testing-library/react';
import HomeActive from '.';

describe('HomeActive Svg Component', () => {
  it('renders correctly', () => {
    render(<HomeActive />);

    expect(screen.getByRole('img'));
  });
});
