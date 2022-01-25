import { jest } from '@jest/globals';
import callback from '.';
import SpotifyWebApi from 'spotify-web-api-node';
import { createMocks } from 'node-mocks-http';

jest.mock('spotify-web-api-node');

beforeEach(() => {
  SpotifyWebApi.mockImplementation(() => {
    return {
      _credentials: {
        redirectUri: 'http://localhost:3000/api/callback',
        clientId: 'fake-client-id',
        clientSecret: 'fake-secret-id',
      },
      authorizationCodeGrant: () => {
        return {
          body: {
            access_token: 'fake-access-token',
            refresh_token: 'fake-refresh-token',
            expires_in: 9000,
          },
        };
      },
      setAccessToken: jest.fn(),
      setRefreshToken: jest.fn(),
    };
  });
});

describe('/api/callback', () => {
  it('return status 302', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        code: 'fake-code',
      },
    });
    await callback(req, res);

    expect(res._getStatusCode()).toBe(302);
  });

  it('return status 500', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    await callback(req, res);

    expect(res._getStatusCode()).toBe(500);
  });

  it("return status 500 'error'", async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: {
        error: 'fake-error',
      },
    });
    await callback(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
});
