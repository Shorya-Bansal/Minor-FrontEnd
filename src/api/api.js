import apiClient from "./client";

const loginEndpoint = "/";
const registerEndPoint = "/admin/register";


const Login = (DATA) => { return apiClient.post(loginEndpoint, DATA); }
const Register = (DATA) => { return apiClient.post(registerEndPoint, DATA); }

export default {
    Login,
    Register
};