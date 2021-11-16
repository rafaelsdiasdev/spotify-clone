import { useContext, useEffect } from 'react';
import { UserContext } from '../../contexts/UserContext';

const login = () => {
  const { code, setCode } = useContext(UserContext);

  useEffect(() => {
    setCode(new URLSearchParams(window.location.search).get('code'));
  }, [code]);

  return null;
};

export default login;
