import {IconBox, LoginModal, Logo, Menu, RegisterModal, SearchForm} from "@/components";
import Link from "next/link";
import {useState, MouseEvent} from "react";
import {UseOverlay} from "@/hooks/Use-overlay";
import {useModalContext} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {toast} from "react-toastify";
import {UseBasket} from "@/hooks/Use-Basket";
import {useQueryClient} from "@tanstack/react-query";

export function Header() {
    const queryClient = useQueryClient();

    const {basketData} = UseBasket();
    const {isLogin, Logout} = useUser();
    const {currentModal, closeModalC, openModal} = useModalContext();

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);


    UseOverlay ({
        onclick: () => {
        setShowMobileMenu(false);
        },
        isOverflowHidden: showMobileMenu
    });

    const menuBtnClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        setShowMobileMenu(!showMobileMenu);
    }

    const menuBodyClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    }

    const accountHandler = () => {
        if (isLogin) {
            Logout();
            queryClient.invalidateQueries({ queryKey: ["get-basket"] });
            toast.success("You are logout successfully!");
        }else {
            openModal("Login")
        }
    }
    
    return (
        <header className="mb-[33px]">
            {currentModal === "Login" && <LoginModal closeModal={closeModalC}/>}
            {currentModal === "Register" && <RegisterModal closeModal={closeModalC}/>}
            <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
                <Logo/>
                <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
                    <SearchForm inputClassName={"py-[15px]"}/>
                </div>
                <ul className="hidden lg:flex gap-5">
                    <li className={"flex gap-2 cursor-pointer"} onClick={accountHandler}>
                        <IconBox linkClassName={"flex items-center"} icon={"icon-user"} size={24} title={`${isLogin? "Logout" : "Login/Register"}`} link={"#"} hideTitleOnMobile={true} titleClassName={"text-medium text-gray-500 font-lato"}/>
                    </li>
                    <li className="flex gap-2 cursor-pointer">
                        <IconBox linkClassName={"flex items-center"} icon={"icon-shopping-cart"} size={24} title={"Card"} link={"#"} hideTitleOnMobile={true} badge={basketData.length} titleClassName={"text-medium text-gray-500 font-lato"}/>
                    </li>
                </ul>
                <button onClick={menuBtnClickHandler} className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]">
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                </button>
            </div>

            <div className="border-gray-200 border-y h">
                <div onClick={menuBodyClickHandler} className={`${showMobileMenu ? "left-0 fixed overflow-y-scroll" : "-left-[100%] absolute"} container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex top-0 bottom-0 lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] lg:py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}>
                    <Menu/>

                    <div className="hidden lg:flex items-center shrink-0 gap-3">
                        <IconBox icon={"icon-headset xl:text-[32px] 2xl:text-[36px] aspect-square"} size={30} link={"#"}/>
                        <div>
                            <Link href="tel:19008888"
                               className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                            <div className="font-lato text-xsmall"><span className="hidden xl:inline-block">24/7 </span>Support
                                Center
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-center gap-2">
                    <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
                        <SearchForm/>
                    </div>
                    <ul className="flex gap-2">
                        <li className="flex gap-2 cursor-pointer" onClick={accountHandler}>
                            <IconBox linkClassName={"flex items-center"} icon={"icon-user"} size={24} title={`${isLogin ? "Logout" : "Login/Register"}`}
                                     link={"#"}
                                     titleClassName={"text-medium text-gray-500 font-lato"}/>
                        </li>
                        <li className="flex gap-2 cursor-pointer">
                            <IconBox linkClassName={"flex items-center"} icon={"icon-shopping-cart"} size={24}
                                     title={"Card"} link={"#"} badge={basketData.length}
                                     titleClassName={"text-medium text-gray-500 font-lato"}/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}