import { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Container } from './styles';
import PrivateRoute from '../../components/PrivateRoute';
import spotifyApi from '../../services/spotifyApi';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const { search, setSearch, setTrack } = useContext(UserContext);

  const [trackResults, setTrackResults] = useState([]);
  const [artistsResults, setArtistsResults] = useState([]);
  const [isHovered, setHovered] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);

  const handleMouseover = () => setHovered(true);
  const handleMouseout = () => setHovered(false);

  const handlePlay = (track) => {
    console.log(track);
    if (track) {
      setTrack(track);
    } else {
      setTrack(trackResults[0].uri);
    }
    setSearch('');
  };

  useEffect(async () => {
    if (!search) return setSearch('');
    let canSearch = false;

    try {
      const searchTracks = await spotifyApi.searchTracks(search);
      const tracks = await searchTracks.body.tracks.items.map((track) => {
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images,
          duration: (track.duration_ms / 60 / 1000)
            .toFixed(2)
            .replace('.', ':'),
        };
      });

      setTrackResults(tracks);

      const searchArtists = await spotifyApi.searchArtists(search);
      const artists = await searchArtists.body.artists.items.map((image) => {
        return {
          image: image.images[1]?.url,
        };
      });

      setArtistsResults(artists);
    } catch (error) {
      router.replace('/home');
    }

    return () => (canSearch = true);
  }, [search]);

  useEffect(() => {
    ref.current?.addEventListener('mouseover', handleMouseover);
    ref2.current?.addEventListener('mouseover', handleMouseover);
    ref.current?.addEventListener('mouseout', handleMouseout);
    ref2.current?.addEventListener('mouseout', handleMouseout);

    return () => {
      ref.current?.removeEventListener('mouseover', handleMouseover);
      ref.current?.removeEventListener('mouseout', handleMouseout);
      ref2.current?.removeEventListener('mouseover', handleMouseover);
      ref2.current?.removeEventListener('mouseout', handleMouseout);
    };
  }, [ref.current, ref2.curent]);

  if (trackResults.length < 1 && artistsResults.length < 1) return null;
  return (
    <Container isHovered={isHovered}>
      <section className="top-results">
        <div className="top-results-title">
          <div>
            <h2>Top Results</h2>
          </div>
        </div>
        <div className="top-results-content">
          <div className="top-results-image">
            <img src={artistsResults[0]?.image} alt="primeiro" />
          </div>
          <div className="top-results-artist">
            <div className="top-results-artist-name">
              {trackResults[0].artist}
            </div>
            <div className="top-results-artist-title">
              <span>Artist</span>
            </div>
          </div>
          <div ref={ref2} className="top-results-button">
            <button aria-label="Play" onClick={() => handlePlay()}>
              <svg height="24" role="img" width="24" viewBox="0 0 24 24">
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
          <div ref={ref} className="top-results-mask"></div>
        </div>
      </section>
      <section className="tracks">
        <div className="tracks-title">
          <div>
            <h2>Songs</h2>
          </div>
        </div>
        {trackResults
          .filter((track, idx) => idx <= 3)
          .map((track, idx) => (
            <div
              onClick={() => handlePlay(track.uri)}
              className="tracks-list"
              key={idx}
            >
              <div className="tracks-image">
                <img src={track.albumUrl[2].url} alt="imagem" />
              </div>
              <div>
                {track.title} <span>{track.artist}</span>
              </div>
              <div className="tracks-duration">{track.duration}</div>
            </div>
          ))}
      </section>
    </Container>
  );
};

export default PrivateRoute(Search);
