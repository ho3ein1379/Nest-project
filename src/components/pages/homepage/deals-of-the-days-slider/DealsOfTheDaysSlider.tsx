import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import {ProductDealsCard, SimpleProductCard} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Products";

interface Props {
    sliderData: Array<EntityType<ProductType>>;
}

export function DealsOfTheDaysSlider({sliderData}: Props) {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={true}
            breakpoints= {{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 22
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >
            {
                sliderData.map((slideData, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <ProductDealsCard data={slideData}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );

}