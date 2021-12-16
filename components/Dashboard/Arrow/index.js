import PropTypes from 'prop-types';

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
