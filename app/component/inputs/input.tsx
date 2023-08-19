"use client"

import { FieldErrors, FieldValue, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { format } from "util";

interface Inputprops {
    id: string,
    label: string,
    type?: string,
    disabled?: boolean,
    formatPrice?: boolean,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    error: FieldErrors



}

const Input: React.FC<Inputprops> = ({
    id,
    label,
    type = "text",
    disabled,
    formatPrice,
    required,
    register,
    error

}) => {
    return (
        <div className="w-full relative">
            {
                formatPrice && (
                    <BiDollar size={24} className=" text-neutral-700 absolute top-5 left-2 " ></BiDollar>

                )
            }
            <input id={id} disabled={disabled} {...register(id, { required })} placeholder=" " type={type} className={`peer w-full p-4 pt-6 rounded-md border-2 outline-none disabled:opacity-70 disabled:cursor-not-allowed transition
           ${formatPrice ? `pl-9` : `pl-4`}  ${error[id] ? `border-rose-500` : `border-neutral-300`} ${error[id] ? `focus:border-rose-500` : `focus:border-black`}`
            }
            />
            <label className={`absolute text-md duration-150 bottom-5 transform -translate-y-3 z-10 origin-[0] ${formatPrice ? 'left-9' : `left-4`} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:scale-75 ${error[id] ? `text-rose-500` : `text-zinc-400`}`}>
                {label}
            </label>


        </div>
    )
}
export default Input;

