import React from 'react';
import { Container } from './styles';

const ArrowRight = () => {
  return (
    <Container>
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <polyline points="8 4 17 12 8 20" fill="none" stroke="#fff"></polyline>
      </svg>
    </Container>
  );
};

export default ArrowRight;
