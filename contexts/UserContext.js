import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [code, setCode] = useState(null);
  const [logged, setLogged] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <UserContext.Provider
      value={{
        code,
        setCode,
        logged,
        setLogged,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
