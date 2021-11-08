import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';
import spotifyApi from '../../services/spotifyApi';
import useAuth from '../useAuth';

const login = () => {
  const router = useRouter();
  const { code, setCode } = useContext(UserContext);

  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get('code'));
  }, [code]);

  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken && !code) return;
    spotifyApi.setAccessToken(accessToken);
    router.push('/dashboard');
  }, [accessToken]);

  return null;
};

export default login;
