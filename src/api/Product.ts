import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Products";

interface Props {
    populate?: Array<"categories" | "thumbnail" | "gallery">;
    filters?: {},
    sort?: Array<string>,
    pagination?: {
        withCount?: boolean;
        page?: number;
        pageSize?: number;
        start?: number;
        limit?: number;
    }
}


export function getProductsApiCall ({populate, filters = {}, sort = [], pagination = {}}: Props): Promise<ApiResponseType<ProductType>> {

    return apiClient.get("/products", {
        params: {
            populate: populate?.join(","),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}