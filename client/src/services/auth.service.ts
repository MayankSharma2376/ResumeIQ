import api from "../api/axios";

export const registerUser = (data: any)=>
    api.post("/auth/register", data)


export const loginUser = (data: any) =>
    api.post("/auth/login", data);

export const logoutUser = () =>
    api.post("/auth/logout");

export const getProfile = () =>
    api.get("/auth/me");