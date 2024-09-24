import {miniProductSliderMock} from "@/mock/MiniProductSlider";
import Link from "next/link";
import {IconBox} from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";

export function MiniProductSlider() {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={true}
            breakpoints= {{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }}
        >
            {
                miniProductSliderMock.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div style={{backgroundImage: `url(${item.img})`, backgroundColor: item.color}} className="flex items-center aspect-slider pl-4 lg:pl-12 rounded-[10px] bg-[length:50%] bg-no-repeat bg-right-bottom">
                                <div className="basis-1/2 flex flex-col justify-between">
                                    <h3 className="text-heading6 xl:text-heading5 2xl:text-heading4 text-blue-300">{item.title}</h3>
                                    <Link href={item.link}
                                          className="mt-6 pl-[15px] pr-2.5 py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                        <div className="text-xsmall text-white">Shop now</div>
                                        <IconBox icon={"icon-arrow-small-right"} size={24}/>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}