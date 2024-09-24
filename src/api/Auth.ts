import apiClient from "@/api/config/ApiClient";
import RegisterType from "@/types/api/Register";
import {AuthResponseType} from "@/types";
import LoginType from "@/types/api/Login";


export function registerApiCall (data: RegisterType): Promise<AuthResponseType> {
    return apiClient.post("/auth/local/register", data);
}

export function loginApiCall (data: LoginType): Promise<AuthResponseType> {
    return apiClient.post("/auth/local", data);
}