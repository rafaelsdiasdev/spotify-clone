import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import Layout from '.';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }) => {
      return <>{children}</>;
    },
  };
});

describe('Layout Component', () => {
  it('renders correctly', () => {
    render(<Layout />, {
      container: document.head,
    });

    expect(document.title).toBe('Spotify Clone');
  });
});
