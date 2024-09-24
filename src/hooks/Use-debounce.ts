import {useState} from "react";

export default function UseDebounce(func: Function, delay: number) {
    const [timer, setTimer] = useState<number>()
    return function () {
        clearTimeout(timer)
        const timerTimeOut = setTimeout(func, delay);
        setTimer(timerTimeOut)
    }
}