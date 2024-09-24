import {IconBox, ImageView, Logo} from "@/components";
import Link from "next/link";
import {useState} from "react";

export function Footer() {
    const [companyOpen, setCompanyOpen] = useState(false);
    const [informationOpen, setInformationOpen] = useState(false);

    const toggleCompanyHandler = () => setCompanyOpen((prevState) => !prevState);
    const toggleInformationHandler = () => setInformationOpen((prevState) => !prevState);

    return (
        <footer className="container mb-[68px] relative">
        <div className="mb-[68px]">
            <div
                className="rounded-[6px] md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,128,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center mt-[38px] relative">
                <div
                    className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
                    <h2 className="max-w-[60%] text-heading5 sm:text-heading4 md:text-heading3 lg:text-heading2 tracking-[-0.04%] text-blue-300">Stay
                        home & get your daily needs from our shop</h2>
                    <div
                        className="font-lato text-large tracking-[-0.04%] text-[#2B3D34] mt-8 hidden lg:block">Start
                        Your Daily Sopping with Nest Mart
                    </div>
                </div>
                <ImageView src="/assets/images/Screenshot (76).png"
                           className="absolute bottom-0 right-0 sm:h-full h-3/4" alt={"banner"} width={587}
                           height={331}/>
            </div>
        </div>
        <div
            className="flex flex-col md:flex-row justify-between flex-wrap gap-[16px] divide-y-2 md:divide-y-0 mb-[70px]">
            <div className="max-w-[346px]">
                <Logo/>
                <div className="font-lato text-medium mt-4 lg:mt-6">Pellentesque posuere orci lobortis</div>
                <div className="flex items-start gap-2.5 mt-4 lg:mt-6">
                    <IconBox icon={"icon-marker-brand"}/>
                    <div className="font-lato text-medium text-blue-300"><span
                        className="font-bold">Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United
                        States
                    </div>
                </div>
                <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
                    <IconBox icon={"icon-headset text-brand1"}/>
                    <div className="font-lato text-medium text-blue-300"><span
                        className="font-bold">Call Us:</span> (+91) - 540-025-124553
                    </div>
                </div>
                <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
                    <IconBox icon={"icon-paper-plane text-brand1"} size={24}/>
                    <div className="font-lato text-medium text-blue-300"><span
                        className="font-bold">Email:</span> contact@nestmart.com
                    </div>
                </div>
                <div className="flex items-start gap-2.5 mt-2 lg:mt-3">
                    <IconBox icon={"icon-time-fast text-brand1"}/>
                    <div className="font-lato text-medium text-blue-300"><span
                        className="font-bold">Hours:</span> 10:00 - 18:00, Mon - Sat
                    </div>
                </div>
            </div>
            <div className="pt-4 cursor-pointer md:cursor-default md:pt-0">
                <div
                    className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle" onClick={toggleCompanyHandler}>Company
                    <IconBox icon={`icon-down-dark inline-block sm:hidden ${companyOpen ? "rotate-180" : ""}`} size={24}/>
                </div>
                <ul className={`md:flex flex-col gap-2.5 ${companyOpen ? "flex flex-col gap-2" : "hidden"}`}>
                    <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6"><Link href="#">About Us</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Delivery Information</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Privacy Policy</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Terms & Conditions</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Contact Us</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Support Center</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Careers</Link></li>
                </ul>
            </div>
            <div className="pt-4 cursor-pointer md:cursor-default md:pt-0">
                <div
                    className="flex text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300 toggle" onClick={toggleInformationHandler}>Information
                    <IconBox icon={`icon-down-dark inline-block sm:hidden ${informationOpen ? "rotate-180" : ""}`} size={24}/>
                </div>
                <ul className={`md:flex flex-col gap-2.5 ${informationOpen ? "flex flex-col gap-2" : "hidden"}`}>
                    <li className="font-lato text-medium text-blue-300 mt-4 lg:mt-6"><Link href="#">Search Terms</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Advanced Search</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Help & FAQ's</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Store Location</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Orders & Returns</Link></li>
                    <li className="font-lato text-medium text-blue-300"><Link href="#">Feedback for us</Link></li>
                </ul>
            </div>
            <div className="pt-4 md:pt-0">
                <div className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading4 text-blue-300">App
                    & Payment
                </div>
                <div className="font-lato text-small text-blue-300 mt-4 lg:mt-6">Install NetMart App from App Store
                    or Google Play
                </div>
                <div className="flex items-center gap-6 justify-center xl:justify-start pt-4 lg:pt-5">
                    <Link href="#"><ImageView src="/assets/images/va724oeh 1.png" alt="Download app from apple store"
                                              width={129} height={39}/></Link>
                    <Link href="#"><ImageView src="/assets/images/17kw6njp 1.png" alt="Download app from google play"
                                              width={129} height={39}/></Link>
                </div>
                <div className="font-lato text-small text-blue-300 text-center lg:text-left pt-4 lg:pt-5">Secured
                    Payment Gateways
                </div>
                <div className="flex justify-center xl:justify-start pt-4 lg:pt-5">
                    <ImageView src="/assets/images/payment-method%201.png" alt="payment methods" width={225}
                               height={33}/>
                </div>
            </div>
        </div>

        <div className="flex justify-center border-t-2 py-[38px] border-green-100">
            <div className="font-lato text-medium text-blue-300">© All rights reserved</div>
        </div>
    </footer>
)
    ;
}