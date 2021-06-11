import apiClient from "./client";

const loginEndpoint = "/auth/login";
const registerEndPoint = "/auth/register";

const Login = (DATA) => {
  return apiClient.post(loginEndpoint, DATA);
};
const Register = (DATA) => {
  return apiClient.post(registerEndPoint, DATA);
};

// eslint-disable-next-line
export default {
  Login,
  Register,
};
