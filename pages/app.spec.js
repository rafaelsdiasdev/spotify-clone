import { jest } from '@jest/globals';

import { screen, render, fireEvent } from '@testing-library/react';
import App from './_app.js';

const Component = {
  getLayout: jest.fn(),
};

const pageProps = {};

describe('renders correctly', () => {
  it('should', () => {
    render(<App component={Component} pageProps={pageProps}></App>);
  });
});
