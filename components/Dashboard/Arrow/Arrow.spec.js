import { screen, render } from '@testing-library/react';
import Arrow from '.';

const arrow = <svg role="img"></svg>;

describe('Arrow Component', () => {
  it('renders correctly', () => {
    render(<Arrow arrow={arrow} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
