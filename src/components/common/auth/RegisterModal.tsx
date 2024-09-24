import {useForm} from "react-hook-form";
import {FormButton, Modal} from "@/components";
import {Input} from "@/components/";
import RegisterType from "@/types/api/Register";
import {useMutation} from "@tanstack/react-query";
import {registerApiCall} from "@/api/Auth";
import {useUser} from "@/store/AuthContext";
import {UseBasket} from "@/hooks/Use-Basket";
import {useModalContext} from "@/store/ModalContext";
import {toast} from "react-toastify";

interface Props {
    closeModal: () => void;
}

export function RegisterModal({closeModal}: Props) {
    const {uuid2User} = UseBasket();
    const {closeModalC} = useModalContext();
    const {Login} = useUser();
    const {register, handleSubmit, formState: {errors}} = useForm<RegisterType>();

    const mutation = useMutation({mutationFn: registerApiCall});
    const submitHandler = (data: RegisterType) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                if (response.status === 200) {
                    Login(response.jwt, response.user);
                    toast.success(`Dear ${response.user.username}, you are registered successfully!`);
                    closeModalC();
                    uuid2User();
                }
            }
        });
    }

    return (
        <Modal title={"Register"} closeModal={closeModal}>
            <form className={"px-4 md:px-20"} onSubmit={handleSubmit(submitHandler)}>
                <Input type={"text"} register={register("username", {required: "Enter your username"})} errors={errors} label="Username" {...{placeholder:"Please enter your username"}}/>
                <Input type={"email"} register={register("email", {required: "Enter your email"})} errors={errors} label="Email" {...{placeholder:"Please enter your email"}}/>
                <Input type={"password"} register={register("password", {required: "Enter your password", minLength: {value: 3, message: "Password must be at least 3 characters"}})} errors={errors} label="Password" {...{placeholder:"Please enter your password"}}/>
                <FormButton Submit={"Submit"} type={"submit"}/>
            </form>
        </Modal>
    );
}