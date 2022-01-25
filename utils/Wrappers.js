import spotifyApi from '../services/spotifyApi';

export default function Wrappers() {
  const searchItems = async (search, cancel) => {
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

      const searchArtists = await spotifyApi.searchArtists(search);
      const artists = await searchArtists.body.artists.items.map((image) => {
        return {
          image: image.images[1]?.url,
        };
      });

      if (cancel) return;

      return {
        trackResults: tracks,
        artistsResults: artists,
      };
    } catch (error) {
      router.replace('/home');
    }
  };

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

  return {
    getArtistTopTracks,
    getMyTopArtists,
    getMyRecentlyPlayedTracks,
    searchItems,
  };
}
