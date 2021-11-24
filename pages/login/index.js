import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import useAuth from '../useAuth';

export default function Login() {
  const [code, setCode] = useState(null);

  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get('code'));
  }, [code]);

  const token = useAuth(code);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace('/search');
    }
  }, [token]);

  return <h1>TESTE</h1>;
}
