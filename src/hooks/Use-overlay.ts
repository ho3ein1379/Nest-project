import {useEffect} from "react";

interface Props {
    onclick: () => void;
    isOverflowHidden?: boolean;
}

export function UseOverlay ({onclick, isOverflowHidden = false}: Props) {

    useEffect(() => {
        const clickHandler = () => {
            onclick();
        }
        document.addEventListener("click", clickHandler);
        return () => {
            document.removeEventListener("click", clickHandler);
        }
    }, []);

    useEffect(() => {
        if (isOverflowHidden) {
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }

        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [isOverflowHidden]);
}