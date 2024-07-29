// TokenContext.js
import React, {createContext, useContext, useState} from 'react';

const TokenContext = createContext();

export const useTokenContext = () => {
  return useContext(TokenContext);
};

export const TokenProvider = ({children}) => {
  const [token, setToken] = useState('');

  const setAuthToken = newToken => {
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{token, setAuthToken}}>
      {children}
    </TokenContext.Provider>
  );
};
