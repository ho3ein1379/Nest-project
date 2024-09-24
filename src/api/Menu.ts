import apiClient from "@/api/config/ApiClient";
import {ApiResponseType, MenuType} from "@/types";

export async function getMenuApiCall(): Promise<ApiResponseType<MenuType>> {
    return  await apiClient.get("/menus",{
        params: {
            populate: "*"
        }
    });
}