import axiosClient from "./axiosClient";

export const signInApi= ({ email, password }) => {
  const url = '/auth/signin';
  return axiosClient.post(url, {email, password});
}