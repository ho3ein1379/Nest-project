import {MiniProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Products";

interface Props {
    title: string;
    data: EntityType<ProductType>[];
}

export function ProductVerticalList({title, data}: Props) {
    return (
        <>
            <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">{title}</h3>
            <div className="flex flex-col gap-6">

                {
                    data.map((item: EntityType<ProductType>, index: number) => {
                        return (<MiniProductCard key={index} data={item}/>)
                    })
                }
            </div>
        </>
    );
}