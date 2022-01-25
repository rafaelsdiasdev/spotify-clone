import SpotifyWebApi from 'spotify-web-api-node';

const refresh = (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    refreshToken,
  });

  try {
    const { body } = spotifyApi.refreshAccessToken();
    const { access_token, expires_in } = body;

    res.status(200).json({
      accessToken: access_token,
      expiresIn: expires_in,
    });
  } catch (error) {
    console.error('ERROR!', error);
    res.status(400);
  }

  // spotifyApi
  //   .refreshAccessToken()
  //   .then((data) => {
  //     res.json({
  //       accessToken: data.body.access_token,
  //       expiresIn: data.body.expires_in,
  //     });
  //   })
  //   .catch((err) => {
  //     console.error('ERROR!', err);
  //     res.status(400);
  //   });
};

export default refresh;
