import { getArtistTopTracks } from '../spotify/wrappers';

export const usePlay = async (id, wrapper, track) => {
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
};
