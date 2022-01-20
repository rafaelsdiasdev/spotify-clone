import { screen, render } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  it('renders correctely and show text in the button wheen not logged', () => {
    render(<Button logged={false} handleClick={jest.fn()} />);

    expect(screen.getByText('Entrar')).toBeInTheDocument();
  });

  it('renders correctely and show text in the button wheen logged', () => {
    render(<Button logged={true} handleClick={jest.fn()} />);

    expect(screen.getByText('Acesse o web player')).toBeInTheDocument();
  });
});
