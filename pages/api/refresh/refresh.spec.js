import { jest } from '@jest/globals';
import refresh from '.';
import SpotifyWebApi from 'spotify-web-api-node';
import { createMocks } from 'node-mocks-http';

jest.mock('spotify-web-api-node');

beforeEach(() => {
  SpotifyWebApi.mockImplementation(() => {
    return {
      refreshAccessToken: () => {
        return {
          body: {
            access_token: 'fake-access-token',
            expires_in: 9000,
          },
        };
      },
    };
  });
});

describe('/api/refresh', () => {
  it('status 200', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        refreshToken: 'fake-refresh-token',
      },
    });
    await refresh(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it('status 500', async () => {
    SpotifyWebApi.mockImplementation(() => {
      return {
        refreshAccessToken: () => {
          return {};
        },
      };
    });

    const { req, res } = createMocks({
      method: 'GET',
      query: {
        refreshToken: 'fake-refresh-token',
      },
    });
    await refresh(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
});
