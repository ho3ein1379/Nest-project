import apiClient from "@/api/config/ApiClient";
import {ApiResponseTypeSingle, BasketType, UpdateBasketType} from "@/types";


export async function BasketApiCall (): Promise<ApiResponseTypeSingle<BasketType>> {
    const token = window.localStorage.getItem("token");
    const uuid = window.localStorage.getItem("uuid");
    if (!token && !uuid) {
        const response: ApiResponseTypeSingle<BasketType> =  await apiClient.post("/my-basket");
        window.localStorage.setItem("uuid", response.data.attributes.uuid)
        return response;
    }
    if (uuid) {
        return await apiClient.get("/my-basket", {
            params: {
                uuid: uuid
            }
        });
    }

    return await apiClient.get("/my-basket");
}

export async function UpdateBasketApiCall (data: UpdateBasketType): Promise<ApiResponseTypeSingle<BasketType>> {
    const uuid = window.localStorage.getItem("uuid");

    if (uuid) {
        return await apiClient.put("/my-basket", {
            data: data
        },{
            params: {
                uuid: uuid
            }
        });
    }

    return await apiClient.put("/my-basket", {
        data: data
    });
}

export async function UUID2UserApiCall(uuid: string): Promise<ApiResponseTypeSingle<BasketType>> {
    return await apiClient.put("/basket2user/" + uuid);
}