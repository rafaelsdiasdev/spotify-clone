import Router from 'next/router';
import { parseCookies } from 'nookies';

const login = '/home'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  const cookies = parseCookies();
  const accessToken = cookies.TOKEN_SPOTIFY;
  return { auth: accessToken && true }; // change null to { isAdmin: true } for test it.
};

const PrivateRoute = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
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
