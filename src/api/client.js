import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://localhost:3001",
});

export default apiClient;