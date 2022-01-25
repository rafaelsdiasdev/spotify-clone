import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import { UserContext } from '../contexts/UserContext';
import Wrappers from '../utils/Wrappers';
import Search, { getServerSideProps } from '../pages/search/index';

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

jest.mock('../utils/Wrappers');

beforeEach(() => {
  Wrappers.mockImplementation(() => {
    return {
      searchItems: () => {
        return {
          trackResults: () => {
            return {
              body: {
                tracks: {
                  items: [
                    {
                      artist: 'Pearl Jam',
                      title: 'Black',
                      uri: 'spotify:track:5Xak5fmy089t0FYmh3VJiY',
                      albumUrl: [
                        {
                          height: 640,
                          url: 'https://i.scdn.co/image/ab67616d0000b273d400d27cba05bb0545533864',
                          width: 640,
                        },
                        {
                          height: 300,
                          url: 'https://i.scdn.co/image/ab67616d00001e02d400d27cba05bb0545533864',
                          width: 300,
                        },
                        {
                          height: 64,
                          url: 'https://i.scdn.co/image/ab67616d00004851d400d27cba05bb0545533864',
                          width: 64,
                        },
                      ],
                      duration: '5:71',
                    },
                  ],
                },
              },
            };
          },
          artistsResults: () => {
            return {
              body: {
                artists: {
                  items: [
                    {
                      image:
                        'https://i.scdn.co/image/ab6761610000517426b00ac49e5fc94a222b953f',
                    },
                  ],
                },
              },
            };
          },
        };
      },
      getMyRecentlyPlayedTracks: () => {
        return [
          {
            name: 'My Universe',
            uri: 'spotify:track:46HNZY1i7O6jwTA7Slo2PI',
            image:
              'https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d',
            type: 'track',
          },
        ];
      },
      getMyTopArtists: () => {
        return [
          {
            name: 'Coldplay',
            image:
              'https://i.scdn.co/image/ab6761610000f178865a3301762a8fce048cb469',
            type: 'artist',
            id: '4gzpq5DPGxSnKTe4SA8HAU',
          },
        ];
      },
    };
  });
});

const session = {
  display_name: 'fake-name',
  images: [
    {
      height: null,
      url: 'https://fake.url',
      width: null,
    },
  ],
  uri: 'fake-uri',
  id: 'fake-id',
};

const myRecentlyPlayedTracks = [
  {
    name: 'My Universe',
    uri: 'spotify:track:46HNZY1i7O6jwTA7Slo2PI',
    image: 'https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d',
    type: 'track',
  },
];

const myTopArtists = [
  {
    name: 'Coldplay',
    image: 'https://i.scdn.co/image/ab6761610000f178865a3301762a8fce048cb469',
    type: 'artist',
    id: '4gzpq5DPGxSnKTe4SA8HAU',
  },
];

const Component = (
  session,
  myRecentlyPlayedTracks,
  myTopArtists,
  mockContext,
) => {
  return (
    <UserContext.Provider value={mockContext}>
      <Search
        session={session}
        myRecentlyPlayedTracks={myRecentlyPlayedTracks}
        myTopArtists={myTopArtists}
      ></Search>
    </UserContext.Provider>
  );
};

describe('Search Page', () => {
  it('Loads initial data and renders correctly', async () => {
    const mockContext = {
      search: '',
      track: 'fake-track',
      setTrack: jest.fn(),
      setSession: jest.fn(),
      active: false,
    };

    const response = await getServerSideProps({});
    const { props } = response;

    render(
      Component(
        props.session,
        props.myRecentlyPlayedTracks,
        props.myTopArtists,
        mockContext,
      ),
    );

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          myRecentlyPlayedTracks: [
            {
              name: 'My Universe',
              uri: 'spotify:track:46HNZY1i7O6jwTA7Slo2PI',
              image:
                'https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d',
              type: 'track',
            },
          ],
          myTopArtists: [
            {
              name: 'Coldplay',
              image:
                'https://i.scdn.co/image/ab6761610000f178865a3301762a8fce048cb469',
              type: 'artist',
              id: '4gzpq5DPGxSnKTe4SA8HAU',
            },
          ],
          session: {
            display_name: 'Rafael',
          },
        },
      }),
    );
    expect(screen.getByAltText('Coldplay'));
  });

  it("renders correctly when search equal ''", async () => {
    const mockContext = {
      search: '',
      track: 'fake-track',
      setTrack: jest.fn(),
      setSession: jest.fn(),
      active: false,
    };

    Wrappers.mockImplementation(() => {
      return {
        searchItems: () => {
          return {
            trackResults: () => {
              return {};
            },
            artistsResults: () => {
              return {};
            },
          };
        },
        getMyRecentlyPlayedTracks: () => {
          return [
            {
              name: 'My Universe',
              uri: 'spotify:track:46HNZY1i7O6jwTA7Slo2PI',
              image:
                'https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d',
              type: 'track',
            },
          ];
        },
        getMyTopArtists: () => {
          return [
            {
              name: 'Coldplay',
              image:
                'https://i.scdn.co/image/ab6761610000f178865a3301762a8fce048cb469',
              type: 'artist',
              id: '4gzpq5DPGxSnKTe4SA8HAU',
            },
          ];
        },
      };
    });

    const response = await getServerSideProps({});
    const { props } = response;

    render(
      Component(
        props.session,
        props.myRecentlyPlayedTracks,
        props.myTopArtists,
        mockContext,
      ),
    );

    expect(screen.getByText('Your Top Artists')).toBeInTheDocument();
  });

  it('should set recently tracks', async () => {
    const mockContext = {
      search: '',
      track: undefined,
      setTrack: jest.fn(),
      setSession: jest.fn(),
      active: false,
    };

    Wrappers.mockImplementation(() => {
      return {
        searchItems: () => {
          return {
            trackResults: () => {
              return {};
            },
            artistsResults: () => {
              return {};
            },
          };
        },
        getMyRecentlyPlayedTracks: () => {
          return [
            {
              name: 'My Universe',
              uri: 'spotify:track:46HNZY1i7O6jwTA7Slo2PI',
              image:
                'https://i.scdn.co/image/ab67616d00001e02ec10f247b100da1ce0d80b6d',
              type: 'track',
            },
          ];
        },
        getMyTopArtists: () => {
          return [
            {
              name: 'Coldplay',
              image:
                'https://i.scdn.co/image/ab6761610000f178865a3301762a8fce048cb469',
              type: 'artist',
              id: '4gzpq5DPGxSnKTe4SA8HAU',
            },
          ];
        },
      };
    });

    const response = await getServerSideProps({});
    const { props } = response;

    render(
      Component(
        props.session,
        props.myRecentlyPlayedTracks,
        props.myTopArtists,
        mockContext,
      ),
    );

    expect(screen.getByText('Your Top Artists')).toBeInTheDocument();
  });

  it('should render when search track or music or artists', async () => {
    const mockContext = {
      search: 'fake-search',
      track: 'fake-track',
      setTrack: jest.fn(),
      setSession: jest.fn(),
      active: false,
    };

    const response = await getServerSideProps({});
    const { props } = response;

    render(
      Component(
        props.session,
        props.myRecentlyPlayedTracks,
        props.myTopArtists,
        mockContext,
      ),
    );

    expect(screen.getByText('Top Result')).toBeInTheDocument();
    expect(screen.getByText('Songs')).toBeInTheDocument();
  });
});
