"use client";

//importing librairs and functions 

import { useState, useEffect, useCallback } from "react";
import {IoMdClose} from "react-icons/io";
import Button from "../button";


interface ModalProps {
    isOpen?: boolean;
    onClose:() => void;
    onSubmit:() => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;

}


const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel


}) => {
    const [showModal, setShowModal] = useState(isOpen);
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        setTimeout(() => {
           onClose();

        }
            , 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();

    }, [disabled, onSubmit]);
    const handleSecondaryAction= useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }
        secondaryAction()
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

     return (
        <>
            <div className=" 
               justify-center 
               items-center 
               flex 
               overflow-x-hidden 
               overflow-y-auto 
               fixed 
               inset-0 
               z-50 
               outline-none 
               focus:outline-none
               bg-neutral-800/70">
                <div className="
                     relative 
                     w-full
                     
                     md:w-4/6
                     lg:w-3/6
                     xl:w-2/5
                     my-6
                     mx-auto 
                     h-full 
                     lg:h-auto
                     md:h-auto">
                    <div className={`
                         translate
                         duration-300
                         h-full
                         ${showModal ? 'translate-y-0' : 'translate-y-full'}
                         ${showModal ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className="
                            translate
                            h-full
                            lg:h-auto
                            md:h-auto
                            border-0 
                            rounded-lg 
                            shadow-lg 
                            relative 
                            flex 
                            flex-col 
                            w-full 
                            bg-white 
                            outline-none 
                            focus:outline-none">
                            <div className="flex items-center rounded-t justify-center relative border-b-[1px]">
                                <button  onClick={handleClose} className="transition absolute hover:opacity-70 p-1 border-0 left-9 ">
                                    <IoMdClose size={18}></IoMdClose>
                                </button>
                                <div className="text-lg font-semibold">
                                   {title}

                                </div>
                            </div>
                            <div className="p-6 flex-auto realtive">
                                {body}

                            </div>
                            <div className=" flex flex-col p-6 gap-2">
                                <div className=" flex flex-row items-center gap-4 w-full">

                                    {
                                        secondaryAction&& secondaryActionLabel&& (<Button  
                                            disabled={disabled} 
                                            onClick={handleSecondaryAction}
                                            label={secondaryActionLabel}
                                            outline
                                             ></Button>)
                                    }
                                    <Button  
                                    disabled={disabled} 
                                    onClick={handleSubmit}
                                    label={actionLabel}
                                     ></Button>

                                 

                                </div>
                                {footer}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}
export default Modal;
