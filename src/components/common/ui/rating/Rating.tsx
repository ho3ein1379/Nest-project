import {IconBox} from "@/components";

interface Props {
    rate: number;
}

export function Rating({rate}: Props) {

    let star = [];
    let notStar = [];
    for (let i: number = 0; i < rate; i++) {
        star.push(<li key={`star-${i}`} className="flex"><IconBox icon={"icon-star-full"} size={12}/></li>);
    }

    for (let i = rate; i < 5; i++) {
        notStar.push(<li key={`notStar-${i}`} className="flex"><IconBox icon={"icon-star-empty"} size={12}/></li>);
    }

    return (
        <>
            <ul className="flex gap-1">
                {star}
                {notStar}
            </ul>
            <div className="text-xsmall text-gray-500 font-lato">({rate})</div>
        </>
    );
}