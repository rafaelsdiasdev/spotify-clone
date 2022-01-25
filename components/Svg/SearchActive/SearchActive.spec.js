import { render, screen } from '@testing-library/react';
import SearchActive from '.';

describe('SearchActive Svg Component', () => {
  it('renders correctly', () => {
    render(<SearchActive />);

    expect(screen.getByRole('img'));
  });
});
