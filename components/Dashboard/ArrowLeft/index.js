import { Container } from './styles';

const ArrowLeft = () => {
  return (
    <Container>
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <polyline points="16 4 7 12 16 20" fill="none" stroke="#fff"></polyline>
      </svg>
    </Container>
  );
};

export default ArrowLeft;
