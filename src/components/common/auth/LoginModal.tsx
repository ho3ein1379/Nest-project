import {FormButton, Input, Modal} from "@/components";
import {useModalContext} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {loginApiCall} from "@/api/Auth";
import LoginType from "@/types/api/Login";
import {toast} from "react-toastify";
import {UseBasket} from "@/hooks/Use-Basket";

interface Props {
    closeModal: () => void;
}

export function LoginModal({closeModal}: Props) {
    const {openModal, closeModalC} = useModalContext();
    const {uuid2User} = UseBasket();
    const {Login} = useUser();
    const {register, handleSubmit, formState: {errors}} = useForm<LoginType>();

    const mutation = useMutation({mutationFn: loginApiCall});
    const submitHandler = (data: LoginType) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                Login(response.jwt, response.user);
                toast.success(`Dear ${response.user.username}, you are login successfully!`);
                closeModalC();
                uuid2User();
            }
        });
    }

    return (
        <Modal title={"Login"} closeModal={closeModal}>
            <form className={"px-4 md:px-20"} onSubmit={handleSubmit(submitHandler)}>
                <Input type={"text"} register={register("identifier", {required: "Enter your username"})} errors={errors}
                       label="Username" {...{placeholder: "Please enter your username"}}/>
                <Input type={"password"} register={register("password", {
                    required: "Enter your password",
                    minLength: {value: 3, message: "Password must be at least 3 characters"}
                })} errors={errors} label="Password" {...{placeholder: "Please enter your password"}}/>
                <div className={"flex justify-between items-center"}>
                    <FormButton Submit={"Submit"} type={"submit"}/>
                    <div className={"flex justify-end items-center"} >
                        <p className={"text-red md:text-xl text-sm"}>Not registered?<span onClick={() => {openModal("Register")}} className={"bg-green-400 text-white cursor-pointer ml-2 p-1 rounded"}>Register</span></p>
                    </div>
                </div>
            </form>
        </Modal>
    );
}