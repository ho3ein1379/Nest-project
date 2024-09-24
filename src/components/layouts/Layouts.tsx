import {Header} from "@/components";
import {Footer} from "@/components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export function Layouts({children}: Props) {
    return (
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    );
}