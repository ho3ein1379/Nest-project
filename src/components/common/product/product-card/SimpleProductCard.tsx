import {Badge, IconBox, ImageView, Rating} from "@/components";
import Link from "next/link";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Products";
import ProductCardAdd from "@/components/common/product/product-card/ProductCardAdd";
import {useEffect, useState} from "react";

interface Props {
    data: EntityType<ProductType>
}

export function SimpleProductCard({data}: Props) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const resizeHandler = () => {
            setIsMobile(window.innerWidth <= 640);
        }
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    const titleChangeHandler =
        data.attributes.title.length > 23 ?
            `${data.attributes.title.slice(0, 22)}...`
            :
            data.attributes.title;

    return (
        <div
            className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
            {data.attributes.label && <Badge badge={data.attributes.label} price={data.attributes.price}
                    sale_price={data.attributes.sell_price}/>}
            <div
                className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-heart text-brand1"} size={15}/>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-shuffle"} size={15}/>
                </div>
                <div className="p-2.5 hover:bg-green-150">
                    <IconBox icon={"icon-eye"} size={15}/>
                </div>
            </div>
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} className="m-auto w-full aspect-[3/2] mb-[28px]" height={168} width={210}
                       alt={"products"}/>
            <div className="flex flex-col gap-2">
                {data.attributes.categories?.data[0] ? <div
                    className="text-gray-500 text-xsmall">{data.attributes.categories?.data[0].attributes.title}</div> : <div className="text-gray-500 text-xsmall">Fruits</div>}
                <Link href={"#"}><h3
                    className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden"><div className={data.attributes.title.length < 22 ? "pb-4" : "pb-0"}>
                    {isMobile ? titleChangeHandler : data.attributes.title}
                </div></h3></Link>
                <div className="flex gap-4">
                    <Rating rate={data.attributes.rate}/>
                </div>
                <div className="font-lato text-xsmall text-gray-500">{data.attributes.weight} {data.attributes.unit}</div>
            </div>
            {
                data.attributes.total && data.attributes.sold ?
                    <>
                        <div className="flex items-center justify-between mt-3">
                            {
                                data.attributes.sell_price ?
                                    <>
                                        <div>
                                            <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                                            <span
                                                className="text-heading-sm line-through text-gray-500 hidden md:inline-block">${data.attributes.price}</span>
                                        </div>
                                    </>
                                    :
                                    <span
                                        className="text-heading5 text-green-200">${data.attributes.price}</span>
                            }
                        </div>
                        <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                        <div style={{width: `${(data.attributes.sold / data.attributes.total) * 100}%`}}
                                 className="bg-green-200 h-[4px] rounded-[2px]"></div>
                        </div>
                        <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {data.attributes.sold}/{data.attributes.total}</div>
                        <div className="mt-[23px]">
                            <button
                                className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                <IconBox icon={"icon-shopping-cart"}/>
                                <span className="text-heading-sm">Add To Card</span>
                            </button>
                        </div>

                    </>
                    :
                    <div className="flex items-center justify-between flex-wrap mt-3">
                        {
                            data.attributes.sell_price ?
                                <>
                                    <div>
                                        <span className="text-heading5 text-green-200">${data.attributes.sell_price}</span>
                                        <span
                                            className="text-heading-sm line-through text-gray-500 hidden md:inline-block">${data.attributes.price}</span>
                                    </div>
                                </>
                                :
                                <span
                                    className="text-heading5 text-green-200">${data.attributes.price}</span>
                        }
                        <ProductCardAdd productData={data}/>
                    </div>
            }
        </div>

    );
}