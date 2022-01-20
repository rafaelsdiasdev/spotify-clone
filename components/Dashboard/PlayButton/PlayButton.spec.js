import { screen, render } from '@testing-library/react';
import PlayButton from '.';


describe('PlayButton Component', () => {
  it('renders correctly', () => {
    render(<PlayButton   
      handlePlay={jest.fn()}
      pauseIcon={true}
      id="fake-id"
      wrapper="fake-wrapper"
      uri="fake-uri"
      idx={1}
      show={true} />);

    expect(screen.getByLabelText('Play')).toBeInTheDocument();
  });
});
