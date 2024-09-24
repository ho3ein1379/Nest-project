import {ImageView, Rating} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Products";

interface Props {
    data: EntityType<ProductType>
}

export function MiniProductCard({data}: Props) {
    return (
        <div className="flex gap-3 lg:gap-5">
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} width={100} height={120} alt={"ourOfferImages"}/>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-heading6 text-blue-300 mb-1"><p className={data.attributes.title.length < 30 ? "pb-4" : "pb-0"}>{data.attributes.title}</p></div>
                    <Rating rate={data.attributes.rate}/>
                </div>
                {
                    data.attributes.sell_price ?
                        <>
                            <div>
                                <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                                <span
                                    className="text-heading-sm line-through text-gray-500">${data.attributes.price}</span>
                            </div>
                        </>
                        :
                        <span className="text-heading5 text-green-200">${data.attributes.price}</span>
                }
            </div>
        </div>
    );
}