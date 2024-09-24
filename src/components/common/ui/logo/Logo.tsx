import {ImageView} from "@/components";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <ImageView className={"w-[117px] lg:w-[242px]"} src={"/assets/images/Logo.png"} alt={"logo"} width={242} height={66}/>
        </Link>
    );
}
