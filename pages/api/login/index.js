import SpotifyWebApi from 'spotify-web-api-node';

export default async (req, res) => {
  const scopes = [
    'user-read-recently-played',
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-top-read',
  ];

  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const uri = spotifyApi.createAuthorizeURL(scopes);

  res.status(200).json({ uri });
};
