import axiosClient from "./axios-client";

export const signInApi = (email, password) => {
  const url = '/auth/signin';
  return axiosClient.post(url, { email, password });
}

export const registerApi = (email, password, firstname, lastname) => {
  const url = '/auth/register';
  return axiosClient.post(url, { email, password, firstname, lastname });
}