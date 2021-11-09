import PropTypes from 'prop-types';
import { Container } from './styles';

const Separator = () => {
  return <Container></Container>;
};

Separator.propTypes = {
  fill: PropTypes.string,
};

export default Separator;
