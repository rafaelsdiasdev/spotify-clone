import Router from 'next/router';
import nookies from 'nookies';
import spotifyApi from '../../services/spotifyApi';

const home = '/home';

const checkUserAuthentication = async (ctx) => {
  const cookies = nookies.get(ctx);
  const accessToken = cookies.TOKEN_SPOTIFY;

  let session = {};

  if (accessToken) {
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

  return {
    auth: accessToken && true,
    token: accessToken,
    session,
  };
};

const PrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const user = await checkUserAuthentication(context);

    if (!user?.auth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: home,
        });
        context.res?.end();
      } else {
        Router.replace(home);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: user,
      });
      return { ...wrappedProps, user };
    }

    return { user };
  };

  return hocComponent;
};

export default PrivateRoute;
