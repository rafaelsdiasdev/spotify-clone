import PropTypes from 'prop-types';
import { Container } from './styles';
import PlayIcon from '../../../public/svg/playIcon.svg';
import PauseIcon from '../../../public/svg/pause.svg';

const PlayButton = ({
  handlePlay,
  pauseIcon,
  id,
  wrapper,
  uri,
  idx,
  show = false,
}) => {
  return (
    <Container show={show} className="card-button">
      <button
        aria-label="Play"
        data-testid="play-button"
        onClick={() => handlePlay(id, wrapper, uri, idx)}
      >
        {pauseIcon ? <PauseIcon /> : <PlayIcon />}
      </button>
    </Container>
  );
};

PlayButton.propTypes = {
  /** Play music. */
  handlePlay: PropTypes.func,
  /** Toogle pause/play icons in ui. */
  pauseIcon: PropTypes.bool,
  /** Song id. */
  id: PropTypes.any,
  /** Select function wrapper. */
  wrapper: PropTypes.string,
  /** Uri of the music. */
  uri: PropTypes.string,
  /** Current music/artist index. */
  idx: PropTypes.number,
  /** Show icon in storybook. default opacity 0. */
  show: PropTypes.bool,
};

PlayButton.defaultProps = {
  pauseIcon: false,
};

export default PlayButton;
