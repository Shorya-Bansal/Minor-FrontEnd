import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.6:3001",
  // To Get this IP adress follow
  // - Go to CMD
  // - Type ipconfig and press enter
  // - Scroll Down to find your IPv4 address it must look like this - 192.168.xx.xx
});

export default apiClient;
