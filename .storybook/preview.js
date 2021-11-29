import * as nextImage from 'next/image';
import { UserStorage } from '../contexts/UserContext';

export const parameters = {
  backgrounds: {
    default: 'black',
    values: [
      {
        name: 'black',
        value: '#000',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const decorators = [
  (Story) => {
    return (
      <UserStorage>
        <Story />
      </UserStorage>
    );
  },
];
