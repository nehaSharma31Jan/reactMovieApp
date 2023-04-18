import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
}

const SECRET_KEY = 'secret_key_for_jwt';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return true;
  } catch (err) {
    return false;
  }
};

export const getUserId = () => {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return decoded.userId;
  } catch (err) {
    return null;
  }
};
