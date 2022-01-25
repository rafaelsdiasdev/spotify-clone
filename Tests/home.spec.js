import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../contexts/UserContext';
import Home, { getServerSideProps } from '../pages/home/index';

jest.mock('../services/spotifyApi', () => {
  return {
    __esModule: true,
    default: {
      _credentials: {
        clientId: 'fake-clientId',
        accessToken: 'fake-accessToken',
      },
      setAccessToken: () => {},
      getMe: () => {
        return {
          body: {
            country: 'BR',
            display_name: 'fake-name',
            email: 'fake-email',
            explicit_content: {
              filter_enabled: false,
              filter_locked: false,
            },
            external_urls: {
              spotify: 'https://fake.url',
            },
            followers: {
              href: null,
              total: 0,
            },
            href: 'https://fake.href',
            id: 'fake-id',
            images: [
              {
                height: null,
                url: 'https://fake.url',
                width: null,
              },
            ],
            product: 'fake-product',
            type: 'fake-type',
            uri: 'fake-uri',
          },
          headers: {
            'cache-control': 'private, max-age=0',
            'content-length': '357',
            'content-type': 'application/json; charset=utf-8',
          },
          statusCode: 200,
        };
      },
    },
  };
});

const Component = (displayName = null, logged = false, isMenuOpen = false) => {
  const mockContext = {
    logged: logged,
    setLogged: () => {},
    accessToken: 'fake-access-token',
    setAccessToken: () => {},
    isMenuOpen: isMenuOpen,
    setIsMenuOpen: () => {},
  };

  const images = [
    {
      height: null,
      url: 'http://fake-url',
      width: null,
    },
  ];

  return (
    <UserContext.Provider value={mockContext}>
      <Home display_name={displayName} images={images} />
    </UserContext.Provider>
  );
};

describe('Home Page...', () => {
  it('Loads initial data', async () => {
    const response = await getServerSideProps();

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          display_name: 'fake-name',
          images: [{ height: null, url: 'https://fake.url', width: null }],
        },
      }),
    );
  });

  it('renders correctly and not logged', () => {
    render(Component());

    expect(
      screen.getByText('Suas músicas estão com saudade'),
    ).toBeInTheDocument();
  });

  it('should be logged in', () => {
    render(Component('fake-name', true));

    expect(screen.getByText('Escutar muda tudo')).toBeInTheDocument();
  });

  it('should click in menu', () => {
    render(Component('fake-name', true, true));

    const button = screen.getByTestId('button');
    fireEvent.click(button);
  });
});
