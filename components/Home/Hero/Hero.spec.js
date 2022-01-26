import { jest } from '@jest/globals';
import { screen, render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import { api } from '../../../services/api';
import Hero from '.';

jest.mock('next/router');
jest.mock('../../../services/api');

beforeEach(() => {
  useRouter.mockImplementation(() => {
    return {
      push: jest.fn(),
    };
  });

  api.mockImplementation(() => {
    return {
      get() {
        return {
          data: {
            uri: 'http://fake.uri',
          },
        };
      },
    };
  });
});

describe('Hero Component', () => {
  it('renders correctly and logged out', () => {
    render(<Hero logged={false}></Hero>);
    expect(screen.getByText('Escutar muda tudo'));

    const login = screen.getByTestId('login');
    fireEvent.click(login);
  });

  it('renders correctly and logged in', () => {
    render(<Hero logged={true}></Hero>);
    expect(screen.getByText('Suas músicas estão com saudade'));

    const login = screen.getByTestId('login');
    fireEvent.click(login);
  });
});
