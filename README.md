## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Storybook
```bash
npm run storybook
# or
yarn storybook
```

## Create a Credentials in Spotify Developers

in .env.local, use:

```
API_URL=http://localhost:3000

SPOTIFY_CLIENT_ID=[Your Spotify Client ID]
SPOTIFY_CLIENT_SECRET=[Your Spotify Client Secret]
SPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback
```
