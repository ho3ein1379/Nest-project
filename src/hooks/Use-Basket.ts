import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {BasketApiCall, UpdateBasketApiCall, UUID2UserApiCall} from "@/api/Basket";
import {BasketItemType, UpdateBasketType} from "@/types";
import {toast} from "react-toastify";

interface ResponseMessageType {
    response: {
        config: {},
        data: {
            data: null,
            error: {
                details: {},
                message: string,
                name: string,
                status: number
            }
        },
        headers: {},
        request: XMLHttpRequest
    }
}

export function UseBasket () {
    const queryClient = useQueryClient();

    const {data: basketDatas} = useQuery({queryKey: ["get-basket"], queryFn: BasketApiCall});

    const mutate = useMutation({mutationFn: UpdateBasketApiCall});
    const mutateUuid2User = useMutation({mutationFn: UUID2UserApiCall, onSuccess: (response) => {
            console.log("response", response);
            window.localStorage.removeItem("uuid");
            queryClient.invalidateQueries({ queryKey: ["get-basket"] });
        }});
    const basketData = basketDatas?.data.attributes.basket_items ?? [];

    const addItemsHandler = (productId: number) => {
        const prepareUpdateData = basketData.map((item) => {
            return {
                product: {
                    connect: [{id: item.product.data.id}]
                },
                quantity: item.quantity
            }
        });
        prepareUpdateData.push({
            product: {
                connect: [{id: productId}]
            },
            quantity: 1
        });

        const updateData: UpdateBasketType = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["get-basket"]});
            }});
    }

    const updateItemsHandler = (productId: number, type: "increase" | "decrease") => {
        let prepareUpdateData = basketData.map((item) => {
            return {
                product: {
                    connect: [{id: item.product.data.id}]
                },
                quantity: item.quantity
            }
        });
        prepareUpdateData = prepareUpdateData.map((item) => {
            if (item.product.connect[0].id === productId) {
                if (type === "increase") {
                    item.quantity = item.quantity + 1;
                }else {
                    item.quantity = item.quantity - 1;
                }
            }
            return item;
        })

        const updateData: UpdateBasketType = {
            basket_items: prepareUpdateData
        }
        mutate.mutate(updateData, {
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: ["get-basket"] });
            },
            onError: (error: unknown): void => {
                if ((error as ResponseMessageType)?.response?.data?.error) {
                    const response = error as ResponseMessageType;
                    toast.error(response.response.data.error.message);
                } else {
                    toast.error("پارامار های ارسالی صحیح نمیباشد!");
                }
            }
        });
    }

    const getItemHandler = (productId: number): BasketItemType | undefined => {
        return basketData.find((item) => item.product.data.id === productId);
    }

    const uuid2UserHandler = () => {
        const token = window.localStorage.getItem("token");
        const uuid = window.localStorage.getItem("uuid");

        if (token && uuid) {
            if (basketData.length > 0) {
                mutateUuid2User.mutate(uuid);
            }else {
                window.localStorage.removeItem("uuid");
                queryClient.invalidateQueries({ queryKey: ["get-basket"] });
            }
        }
    }

    return {basketData: basketData, addItem: addItemsHandler, updateItem: updateItemsHandler, getItem: getItemHandler, uuid2User: uuid2UserHandler};
}