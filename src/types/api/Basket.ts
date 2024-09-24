import {EntityType, ProductType} from "@/types";

export interface BasketType {
    uuid: any
    basket_items: Array<BasketItemType>
}

export interface BasketItemType {
    id: number,
    quantity: number,
    product: {
        data: EntityType<ProductType>
    }
}