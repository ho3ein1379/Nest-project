import {Swiper, SwiperSlide} from "swiper/react";
import { InView } from "react-intersection-observer";
import {Autoplay} from "swiper/modules";
import {ProductVerticalList} from "@/components";
import {useQuery} from "@tanstack/react-query";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Products";
import {getProductsApiCall} from "@/api/Product";

export function OurOfferSlider() {

    const {data: topSellingProducts} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getProductsApiCall.name, "top_selling"],
        queryFn: () => getProductsApiCall({
            populate: ["thumbnail"],
            filters: {is_top_selling: {$eq: true}},
            sort: ["sell_price:desc"]
        })
    });

    const {data: trendingProducts} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getProductsApiCall.name, "trending_products"],
        queryFn: () => getProductsApiCall({populate: ["thumbnail"],
            filters: {is_trending: {$eq: true}}})});

    const {data: recentlyAddProducts} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getProductsApiCall.name, "recently_add"],
        queryFn: () => getProductsApiCall({
            populate: ["thumbnail"],
            sort: ["id:desc"],
            pagination: {
                start: 0,
                limit: 3,
            }
        })
    });

    const {data: topRatedProducts, refetch} = useQuery<ApiResponseType<ProductType>>({
        queryKey: [getProductsApiCall.name, "top_rated"],
        queryFn: () => getProductsApiCall({
            populate: ["thumbnail"],
            sort: ["rate:desc"],
            pagination: {
                page: 1,
                pageSize: 3,
                withCount: false
            }
        }),
        enabled: false
    });


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
                    spaceBetween: 18
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 22
                }
            }}
        >

            <SwiperSlide>
                    {topSellingProducts && <ProductVerticalList title={"Top Selling"} data={topSellingProducts.data}/>}
            </SwiperSlide>

            <SwiperSlide>
                    {trendingProducts && <ProductVerticalList title={"Trending Products"} data={trendingProducts.data}/>}
            </SwiperSlide>

            <SwiperSlide>
                {recentlyAddProducts && <ProductVerticalList title={"Recently Added"} data={recentlyAddProducts.data}/>}
            </SwiperSlide>

            <SwiperSlide>
                <InView as="div" onChange={(inView) => inView && refetch()}>
                    {topRatedProducts && <ProductVerticalList title={"Top Rated"} data={topRatedProducts.data}/>}
                </InView>
            </SwiperSlide>

        </Swiper>
    );
}