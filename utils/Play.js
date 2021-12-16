import Wrappers from '../utils/Wrappers';

export default async function Play(id, wrapper, track) {
  const { getArtistTopTracks } = Wrappers();

  switch (wrapper) {
    case 'getArtistTopTracks':
      const { tracks } = await getArtistTopTracks(id);
      const data = tracks.map((track) => track.uri);
      return data;
    case 'searchTracks':
      return track;
    case 'getMyRecentlyPlayedTracks':
      return track;
    default:
      return track;
  }
}
