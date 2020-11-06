import axiosClient from "./axios-client";

export const signInApi = (email, password) => {
  const url = '/auth/signin';
  return axiosClient.post(url, { email, password });
}