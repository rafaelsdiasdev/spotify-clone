import { useEffect, useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { api } from '../services/api';
import { parseCookies } from 'nookies';

export default function useAuth() {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const cookies = parseCookies();

  const router = useRouter();

  const createCookie = (type, token) => {
    setCookie(null, type, token, {
      maxAge: 3600,
      path: '/',
      SameSite: true,
    });
  };

  useEffect(() => {
    if (cookies && cookies.TOKEN_SPOTIFY) {
      setAccessToken(cookies.TOKEN_SPOTIFY);
      setRefreshToken(cookies.REFRESH_TOKEN_SPOTIFY);
      setExpiresIn(3600);
    }
  }, []);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    console.log('teste 123');
    const interval = setInterval(() => {
      api
        .post('refresh', {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);

          createCookie('TOKEN_SPOTIFY', res.data.accessToken);
        })
        .catch(() => {
          console.log('erro');
          router.replace('/');
        });
    }, (3600 - 60) * 1000); // expires(segundos) menos 1 minuto(60 seconds) em milesegundos(setinterval)

    return () => clearInterval(interval);
  }, [refreshToken]);

  return accessToken;
}
