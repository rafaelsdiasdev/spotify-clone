import { getArtistTopTracks } from '../spotify/wrappers';

export const Play = async (id, wrapper) => {
  switch (wrapper) {
    case 'getArtistTopTracks':
      const { tracks } = await getArtistTopTracks(id);
      const data = tracks.map((track) => track.uri);
      return data;
  }
};
