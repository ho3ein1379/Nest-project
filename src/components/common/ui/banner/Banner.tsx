import {IconBox, ImageView} from "@/components";

interface Props {
    title: string,
    subTitle: string,
    bgImage: string,
    image: string
}

export function Banner({title, subTitle, bgImage, image}: Props) {
    return (
        <>
            <div style={{backgroundImage:`url('${bgImage}')`}} className="grid grid-cols-2 items-center rounded-lg bg-[#FDC040] bg-opacity-20 bg-cover bg-no-repeat">
                <div className="pl-[20px] md:pl-[60px]">
                    <h2 className="text-heading5 sm:text-heading4 lg:text-heading2 xl:text-heading1 2xl:text-display2 text-blue-300 mb-[33px]">{title}</h2>
                    <p className="text-gray-500 mb-[68px] hidden md:inline-block">{subTitle}</p>
                    <form method="post" action="#"
                          className="hidden lg:flex rounded-[30px] pl-[26px] lg:w-[442px] w-full bg-white items-center">
                        <IconBox icon={"icon-paper-plane"} size={24}/>
                        <input type="email" name="email" placeholder="Your email address"
                               className="pl-2 font-lato text-xsmall grow focus:outline-none bg-transparent"/>
                        <input type="submit" value="subscribe"
                               className="text-white hover:bg-green-300 bg-green-200 rounded-[30px] px-[18px] py-2 sm:px-[37px] sm:py-[15px] cursor-pointer text-heading6"/>
                    </form>
                </div>
                <ImageView src={image} className="m-w-[50%]" alt={"banner"} width={717} height={538}/>
            </div>
            <form name="subscription" method="post" action="#"
                  className="flex lg:hidden gap-2.5 items-center justify-between rounded-[30px] mx-auto max-w-[550px] bg-[#F5F5F5] pl-4 sm:pl-5 md:pl-6 mt-4 sm:mt-5 md:mt-6">
                <IconBox icon={"icon-paper-plane"} size={24} link={"#"}/>
                <input type="email" name="email" placeholder="Your email address"
                       className="font-lato text-xsmall sm:grow focus:outline-none bg-transparent"/>
                <input type="submit" value="subscribe"
                       className="text-white hover:bg-green-300 bg-green-200 rounded-[30px] px-[18px] py-2 cursor-pointer text-heading-sm leading-5 md:text-heading6"/>
            </form>
        </>
    );
}