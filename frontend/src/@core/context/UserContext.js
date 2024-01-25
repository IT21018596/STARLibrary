import { createContext, useContext, useState } from 'react';
import jwt_decode from 'jsonwebtoken';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    try {
        // Decode the token
        //const decodedToken = jwt_decode(token);
        //console.log(decodedToken)
        // Extract user information from the decoded token
        //const { Epf, /* other user properties */ } = decodedToken;
    
        // Set user information in the state
        const decoded = jwt_decode.decode(token)
        localStorage.setItem('role', decoded.userRank)
        setUser({ token, /* other user properties */ });
        //localStorage.setItem('user', JSON.stringify(token));
        setWithExpiry(decoded.userRank, 0.1)
      } catch (error) {
        console.error('Error decoding token:', error);
        // Handle the error as needed
      }
  };

  const logout = () => {
    // Clear user information
    setUser(null);
  };

  const setWithExpiry = ( value, expirationHours) => {
    const now = new Date();
    const expirationTime = now.getTime() + expirationHours * 60 *60 * 1000;
    const item = { value, expirationTime}
    localStorage.setItem('damn', JSON.stringify(item))
    
  }

  const getWithExpiry = () => {
    const itemString = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('damn')) : null;
    if(!itemString){
      return null;
    }

    
    const now = new Date();

    if( now.getTime() > itemString.expirationTime){
      localStorage.removeItem('damn')
      return null;
    }

    return itemString.value;
  }

  return (
    <UserContext.Provider value={{ user, login, logout, getWithExpiry }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};