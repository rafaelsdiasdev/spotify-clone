import { jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import { UserContext } from '../contexts/UserContext';
import Dashboard, { getServerSideProps } from '../pages/dashboard/index';

jest.mock('../utils/validateRouter', () => {
  return {
    __esModule: true,
    default: (gssp) => {
      return () => {
        const token = 'fake-token';
        const session = {
          display_name: 'Rafael',
        };
        if (!token) {
          return {
            redirect: {
              destination: `${process.env.API_URL}/home`,
              permanent: false,
            },
          };
        }
        return gssp(token, session);
      };
    },
  };
});

jest.mock('../utils/Wrappers', () => {
  return {
    __esModule: true,
    default: () => {
      return {
        getMyRecentlyPlayedTracks: () => {
          return [
            {
              name: 'Black Out Days',
              uri: 'fake.uri',
              image: 'https://fake.image',
              type: 'fake-track',
            },
          ];
        },
      };
    },
  };
});

describe('Page Dashboard and renders correctly', () => {
  const mockContext = {
    setSession: jest.fn(),
    track: undefined,
    setTrack: jest.fn(),
    active: false,
  };

  it('Loads initial data and renders correctly', async () => {
    const response = await getServerSideProps({});
    const { props } = response;

    render(
      <UserContext.Provider value={mockContext}>
        <Dashboard
          session={props.session}
          myRecentlyPlayedTracks={props.myRecentlyPlayedTracks}
        />
      </UserContext.Provider>,
    );

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          myRecentlyPlayedTracks: [
            {
              name: 'Black Out Days',
              uri: 'fake.uri',
              image: 'https://fake.image',
              type: 'fake-track',
            },
          ],
          session: {
            display_name: 'Rafael',
          },
        },
      }),
    );
    expect(screen.getByText('Recently played')).toBeInTheDocument();
    expect(screen.getByText('Black Out Days')).toBeInTheDocument();
  });
});
