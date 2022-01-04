import { render } from '@testing-library/react';
import Arrow from '.';

describe('Arrow Component', () => {
  it("should show 'alt' as 'arrow'", () => {
    const { getByAltText } = render(
      <Arrow>
        <Image />
      </Arrow>,
    );
    expect(getByAltText('arrow')).toBeInTheDocument();
  });
});
