import {ReactNode} from "react";
import { twMerge } from 'tailwind-merge'

interface Props {
    className: string;
    children: ReactNode;
}

export function Section({className= "", children}: Props) {
    return (
        <section className={twMerge('container mb-[68px]', className)}>
            {children}
        </section>
    );
};