import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { message } from 'antd';

interface AuthContextData {
  token: string;
  user: any;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  enteredUser: (count: number) => void;
  count: number
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [count, setCount] = useState(0); 

  const enteredUser = (count: number) => {
    
    
  
  }

  const login = async (username: string, password: string) => {
    
    try {
      const json = JSON.stringify({ "email": username, "password": password  });
      const config = { 'content-type': 'application/json' };
      const response = await axios.post('http://localhost:4000/users/authenticate', json,{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
      console.log("ewewew    "+response.data)
      const { token: receivedToken, user: receivedUser } = response.data;
      setUser(receivedUser);
      setToken(receivedToken);
      setIsAuthenticated(true);

      localStorage.setItem('token', receivedToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${receivedToken}`;
      console.log(JSON.stringify(axios.defaults.headers.common));
    } catch (error) {
      message.error('Incorrect username or password');
      throw new Error('Incorrect username or password');
    }
  };
 // axios.defaults.headers.common['Authorization'] = `Bearer ABCD`;
  const logout = () => {
    setUser(null);
    setToken('');
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isAuthenticated, enteredUser, count }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth, axios };
 

