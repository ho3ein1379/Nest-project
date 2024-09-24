import {ImageView, Rating} from "@/components";
import {useEffect, useState} from "react";
import {timerHelper} from "@/utils/timer";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Products";
import ProductCardAdd from "@/components/common/product/product-card/ProductCardAdd";


interface Props {
    data: EntityType<ProductType>
}

export function ProductDealsCard({data}: Props) {

    const [remainTime, setRemainTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const timerObj = timerHelper(data.attributes.discount_expire_date);
            setRemainTime(timerObj)
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="relative h-[438px]">
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} className="w-full" alt={"ProductDealsCard"} width={378} height={335} />
            <div className="absolute z-[20] left-[50%] translate-x-[-50%] top-[195px]">
                <div className="timer1 flex items-center gap-3 h-[60px]">
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="day text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.days}</div>
                        <div className="font-lato text-gray-500 text-small">Days</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="hour text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.hours}</div>
                        <div className="font-lato text-gray-500 text-small">Hours</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="minute text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.minutes}</div>
                        <div className="font-lato text-gray-500 text-small">Mins</div>
                    </div>
                    <div className="bg-white rounded-[6px] h-full aspect-square text-center">
                        <div className="second text-green-200 font-bold text-[28px] leading-[38px]">{remainTime.seconds}</div>
                        <div className="font-lato text-gray-500 text-small">Secs</div>
                    </div>
                </div>
                <div className="bg-white mt-2.5 px-8 pt-6 pb-4 rounded-[10px] shadow-c-xs">
                    <div className="text-heading-sm text-blue-300"><p className={data.attributes.title.length < 30 ? "pb-4" : "pb-0"}>{data.attributes.title}</p></div>
                    <div className="flex w-[106px] justify-between h-4 items-center mt-1">
                        <div className="flex gap-4">
                            <Rating rate={data.attributes.rate}/>
                        </div>
                    </div>
                    <div className="font-lato text-xsmall text-gray-500 mt-1">{data.attributes.weight} {data.attributes.unit}</div>
                    <div className="flex items-center justify-between mt-3">
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
                                <span
                                    className="text-heading5 text-green-200">${data.attributes.price}</span>
                        }
                        <ProductCardAdd productData={data}/>
                    </div>
                </div>
            </div>
        </div>
    );
}