import { useContext } from 'react';

import { UserContext } from '../../../contexts/UserContext';
import { Container } from './styles';
import Link from 'next/link';

import { usePlay } from '../../../hooks/usePlay';

const Card = ({ card, title, wrapper }) => {
  const { setTrack } = useContext(UserContext);

  const handlePlay = async (id, wrapper, track, index) => {
    if (id) {
      const tracks = await usePlay(id, wrapper, track);
      setTrack(tracks);
    } else {
      const data = card
        .filter((track, idx) => idx >= index)
        .map((track) => track.uri);
      const tracks = await usePlay(id, wrapper, data);
      setTrack(tracks);
    }
  };

  return (
    <Container>
      <div className="top">
        <div className="top-container">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <Link href="#" className="more">
            See All
          </Link>
        </div>
      </div>
      <div className="card-container">
        {card.map((el, idx) => (
          <div className="card" key={idx}>
            <div className="img">
              <img src={el.image} alt="" />
            </div>

            <div className="details">
              <p>{el.name}</p>

              <span>{el.type}</span>
            </div>

            <div className="card-mask">
              <div className="card-button">
                <button
                  aria-label="Play"
                  onClick={() => handlePlay(el.id, wrapper, el.uri, idx)}
                >
                  <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                    <polygon
                      points="21.57 12 5.98 3 5.98 21 21.57 12"
                      fill="currentColor"
                    ></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Card;
