interface Props {
    Submit: string;
    type?: "submit" | "reset" | "button" | undefined;
}

export function FormButton({Submit, type}: Props) {
    return (
        <button type={type} className={"mt-2 bg-green-400 text-white md:px-8 px-4 py-2 rounded cursor-pointer"}>{Submit}</button>
    );
}