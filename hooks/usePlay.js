import useWrappers from '../hooks/useWrappers';

export default async function usePlay(id, wrapper, track) {
  const { getArtistTopTracks } = useWrappers();

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
