export interface UpdateBasketType {
    basket_items: Array<{
        product: {
            connect: Array<{id: number}>;
        },
        quantity: number
    }>;
}