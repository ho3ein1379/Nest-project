import {memo} from "react";
import {EntityType, ProductType} from "@/types";
import {IconBox} from "@/components";
import {UseBasket} from "@/hooks/Use-Basket";

interface Props {
    productData: EntityType<ProductType>
}

function ProductCardAdd({productData}: Props) {

    const {addItem, updateItem, getItem} = UseBasket();
    const basketItem = getItem(productData.id)


    return (
        <div className="add-product">
            {
                basketItem ?
                    <div className="input-product__container border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex items-center justify-between px-1.5">
                        <div className="flex flex-col justify-between">
                            <IconBox icon={"up icon-angle-small-up cursor-pointer"} onClick={() => updateItem(productData.id, "increase")} size={14}/>
                            <IconBox icon={"down icon-angle-small-down cursor-pointer"} onClick={() => updateItem(productData.id, "decrease")} size={14}/>
                        </div>
                        {
                            basketItem.quantity
                        }
                    </div>
                    :
                    <button onClick={() => addItem(productData.id)} className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds +</button>
            }
        </div>
    );
}

export default memo(ProductCardAdd);