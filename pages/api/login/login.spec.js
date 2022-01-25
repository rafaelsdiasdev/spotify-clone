import { jest } from '@jest/globals';
import login from '.';
import SpotifyWebApi from 'spotify-web-api-node';
import { createMocks } from 'node-mocks-http';

jest.mock('spotify-web-api-node');

beforeEach(() => {
  SpotifyWebApi.mockImplementation(() => {
    return {
      createAuthorizeURL: () => 'http://fake.url',
    };
  });
});

describe('/api/login', () => {
  it('status 200', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });
    await login(req, res);

    expect(res._getStatusCode()).toBe(200);
  });

  it('status 500', async () => {
    SpotifyWebApi.mockImplementation(() => {
      return {};
    });

    const { req, res } = createMocks({
      method: 'GET',
    });
    await login(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
});
