import Router from 'next/router';
import { parseCookies } from 'nookies';

const login = '/home';

const checkUserAuthentication = () => {
  const cookies = parseCookies();
  const accessToken = cookies.TOKEN_SPOTIFY;
  return { auth: accessToken && true };
};

const PrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    if (!userAuth?.auth) {
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default PrivateRoute;
