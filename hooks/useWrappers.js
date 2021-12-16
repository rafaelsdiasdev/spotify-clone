import spotifyApi from '../services/spotifyApi';

export default function useWrappers() {
  const getArtistTopTracks = async (id) => {
    try {
      const response = await spotifyApi.getArtistTopTracks(id, 'BR');
      const data = response.body;
      return data;
    } catch (error) {
      console.error('Error!', error);
    }
  };

  const getMyTopArtists = async () => {
    const response = await spotifyApi.getMyTopArtists();
    const topArtists = await response.body.items.map((artist) => {
      return {
        name: artist.name,
        image: artist.images[2].url,
        type: artist.type,
        id: artist.id,
      };
    });

    return topArtists;
  };

  const getMyRecentlyPlayedTracks = async () => {
    try {
      const response = await spotifyApi.getMyRecentlyPlayedTracks({
        limit: 20,
      });

      const data = await response.body.items
        .map((item) => {
          return {
            name: item.track.name,
            uri: item.track.uri,
            image: item.track.album.images[1].url,
            type: item.track.type,
          };
        })
        .filter(function (track) {
          return (
            !this[JSON.stringify(track)] && (this[JSON.stringify(track)] = true)
          );
        }, {})
        .filter((track, idx) => idx <= 4);

      return data;
    } catch (error) {
      console.error('Error!', error);
    }
  };

  return { getArtistTopTracks, getMyTopArtists, getMyRecentlyPlayedTracks };
}
