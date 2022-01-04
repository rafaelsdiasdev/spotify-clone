import nookies from 'nookies';
import spotifyApi from '../services/spotifyApi';

export default function validateRoute(gssp) {
  return async (context) => {
    const cookies = nookies.get(context);
    const token = cookies.TOKEN_SPOTIFY;

    let session = {};

    if (token) {
      await spotifyApi.setAccessToken(cookies.TOKEN_SPOTIFY);

      const response = await spotifyApi.getMe();
      const { display_name, images, uri, id } = response.body;

      session = {
        display_name,
        images,
        uri,
        id,
      };
    }

    if (!token) {
      return {
        redirect: {
          destination: `${process.env.API_URL}/home`,
          permanent: false,
        },
      };
    }

    return await gssp(token, session);
  };
}
