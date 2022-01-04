import Image from 'next/image';
import { Container } from './styles';

const Arrow = ({ arrow }) => {
  return (
    <Container>
      <Image src={arrow} width={22} height={22} alt="arrow" />
    </Container>
  );
};

export default Arrow;

Arrow.defaultProps = {
  arrow: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
};
