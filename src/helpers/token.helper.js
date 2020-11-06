import * as jwt from 'jsonwebtoken';

export const decodeToken = () => {
  const accessToken = JSON.parse(JSON.stringify(localStorage.getItem('accessToken')));
  const tokenData = jwt.decode(accessToken);
  return tokenData;
}