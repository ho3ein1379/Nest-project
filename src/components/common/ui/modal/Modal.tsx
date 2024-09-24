import {ReactNode} from "react";
import {Portal} from "@/components";

interface Props {
    children: ReactNode;
    title: string;
    closeModal: () => void;
}

export function Modal({children, title, closeModal}: Props) {
    return (
        <Portal onClose={closeModal}>
            <div className={"z-10 min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] overflow-auto border rounded bg-gray-100"}>
                <div className={"flex justify-between rounded bg-white p-8 text-[22px]"}>
                    <div onClick={closeModal} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </div>
                    {title}
                </div>
                <div className={"p-8 text-[18px]"}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}