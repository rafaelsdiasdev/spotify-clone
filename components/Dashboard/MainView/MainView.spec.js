import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import MainView from '.';

jest.mock('next/router');

beforeEach(() => {
  useRouter.mockImplementation(() => {
    return {
      pathname: '/dashboard',
    };
  });
});

describe('MainView Component', () => {
  it('renders correctly to page dashboard', () => {
    render(<MainView />);
  });

  it('renders correctly to page search', () => {
    useRouter.mockImplementation(() => {
      return {
        pathname: '/search',
      };
    });

    render(<MainView />);
  });
});
