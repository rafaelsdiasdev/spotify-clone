import { useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import { api } from '../services/api';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useAuth(code) {
  const cookies = parseCookies();
  const router = useRouter();
  // const [accessToken, setAccessToken] = useState();
  const { accessToken, setAccessToken } = useContext(UserContext);
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    if (cookies && cookies.TOKEN_SPOTIFY) {
      return setAccessToken(cookies.TOKEN_SPOTIFY);
    }
    if (!code) return;

    api
      .post('login', {
        code,
      })
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);

        setCookie(null, 'TOKEN_SPOTIFY', res.data.accessToken, {
          maxAge: 3600,
          path: '/',
        });
      })
      .catch(() => {
        router.replace('/');
      });
  }, [code]);

  useEffect(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      api
        .post('refresh', {
          refreshToken,
        })
        .then((res) => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);

          setCookie(null, 'TOKEN_SPOTIFY', res.data.accessToken, {
            maxAge: 3600,
            path: '/',
          });
        })
        .catch(() => {
          console.log('erro');
          router.replace('/');
        });
    }, (expiresIn - 60) * 1000); // expires(segundos) menos 1 minuto(60 seconds) em milesegundos(setinterval)

    return () => clearInterval(interval);
  }, [expiresIn, refreshToken]);

  return accessToken;
}
