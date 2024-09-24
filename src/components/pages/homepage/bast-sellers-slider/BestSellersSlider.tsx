import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {SimpleProductCard} from "@/components";
import {ProductType} from "@/types/api/Products";
import {EntityType} from "@/types";

interface Props {
    sliderData: Array<EntityType<ProductType>>
}

export function BestSellersSlider({sliderData}: Props) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={true}
            breakpoints= {{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            {
                sliderData.map((slideData: EntityType<ProductType>, index: number) => {
                    return (
                        <SwiperSlide key={index}>
                            <SimpleProductCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );

}