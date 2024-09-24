import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {CategoryType} from "@/types/api/Category";

export function getFeaturedCategoriesApiCall(): Promise<ApiResponseType<CategoryType>> {
    return apiClient.get("/categories", {
        params: {
            populate: "thumbnail",
            filters: {
                is_featured: {
                    $eq: true,
                }
            }
        }
    });
}