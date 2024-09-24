import {UseFormRegisterReturn, FieldErrors} from "react-hook-form";
import {useId} from "react";
import {ErrorMessage} from "@/components";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    type: "number" | "string" | "text" | "tel" | "password" | "email";
    label?: string;
    register: UseFormRegisterReturn<any>;
    errors: FieldErrors<any>
}

export function Input({type= "text", label, register, errors, ...rest}: Props) {

    const id = useId();
    const name = register.name;
    let hasErrors = false;
    if (errors && errors[name]) {
        hasErrors = true;
    }

    return (
        <div className={"mb-8"}>
            <div className={"flex flex-col items-start gap-2"}>
                {label && <label className={"text-nowrap font-bold"} htmlFor={id}>{label}</label>}
                <input className={`w-full rounded-lg p-4 border ${hasErrors && "border-red"}`} id={id} type={type}
                       {...rest}{...register}/>
            </div>
            <ErrorMessage errors={errors} name={name}/>
        </div>
    );
}