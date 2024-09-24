import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface Props {
    children: ReactNode;
}

interface ContextProps {
    currentModal: ModalType;
    openModal: (modalName: ModalType) => void;
    closeModalC: () => void;
}

type ModalType = "Login" | "Register" | null;

const ModalContext = createContext<ContextProps>({currentModal: null, openModal: () => {}, closeModalC: () => {}});

export const useModalContext = () => useContext(ModalContext)

export function ModalContextProvider({children}: Props) {
    const [showModal, setShowModal] = useState<ModalType>(null);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        if (hash.includes("-modal")) {
            const modalHash = hash.split("-")[0] as ModalType;
            setShowModal(modalHash);
        }
    }, []);

    const openModal = (modalName: ModalType) => {
        setShowModal(modalName);
    }

    const closeModalC = () => {
        setShowModal(null);
    }

    return <ModalContext.Provider value={{currentModal: showModal, openModal: openModal, closeModalC: closeModalC}}>
        {children}
    </ModalContext.Provider>;
}