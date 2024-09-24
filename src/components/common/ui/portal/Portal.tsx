import {createPortal} from "react-dom";
import {ReactNode, useEffect} from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}

export function Portal({children, onClose}: Props) {

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    return createPortal(
        <div className={"fixed z-10 top-0 right-0 left-0 bottom-0 bg-[#efefef] bg-opacity-80 flex justify-center items-center"} onClick={onClose}>
            <div className={""} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,

        document.getElementById("portal")!
    );
}