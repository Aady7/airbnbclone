"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState, useCallback } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./modal";
import Heading from "../Heading";
import Input from "../inputs/input";
import Button from "../button";

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [isloading, setloading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({

        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setloading(true);
        axios.post('/api/register', data)
            .then(() => {
                registerModal.onClose()
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setloading(false);
            })

    }

    const bodyContent=(
        <div className=" flex flex-col gap-4 ">
            <Heading title="Welcome to Airbnb" subtitle="Create an account"/>
           <Input id="email" label="Email" disabled={isloading} register={register} error={errors}  required />
           <Input id="name" label="Name" disabled={isloading} register={register} error={errors}  required />
           <Input id="password" type="password" label="Password" disabled={isloading} register={register} error={errors}  required />
          
        </div>
    )


    const footerContent=(
        <div className=" flex flex-col gap-3  mt-5">
            <hr/>
            <Button 
            outline 
            onClick={()=>{}} 
            label="Continue with Google"
            icon={FcGoogle}
            />
            <Button 
            outline 
            onClick={()=>{}} 
            label="Continue with Github"
            icon={AiFillGithub}
            />
            <div className=" justify-center flex flex-row items-center ">
                <div className="text-sm mr-2"> 
                Already have an account?

                </div>
                <div className="font-bold hover:underline cursor-pointer" onClick={registerModal.onClose}> Login

                </div>

            </div>
           
        </div>
      
    )
    return (<Modal disabled={isloading} isOpen={registerModal.isOPEN} title="register" actionLabel="Continue" onClose={registerModal.onClose} onSubmit={handleSubmit(onSubmit)} body={bodyContent} footer={footerContent}  />

    )
}
export default RegisterModal;