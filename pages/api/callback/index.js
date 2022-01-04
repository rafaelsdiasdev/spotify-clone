import SpotifyWebApi from 'spotify-web-api-node';
import { setCookie } from 'nookies';

const callback = async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      setCookie({ res }, 'TOKEN_SPOTIFY', access_token, {
        maxAge: 3600,
        path: '/',
      });
      {
        res;
      }
      setCookie({ res }, 'REFRESH_TOKEN_SPOTIFY', refresh_token, {
        maxAge: 3600,
        path: '/',
      });

      res.redirect(`${process.env.API_URL}/dashboard`);
    })
    .catch((error) => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
};

export default callback;
