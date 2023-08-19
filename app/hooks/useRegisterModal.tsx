import { create } from "zustand";
interface RegisterModalStore{
    isOPEN: boolean,
    onOpen:()=>void,
    onClose:()=>void
}

const useRegisterModal= create<RegisterModalStore>((set)=>({
    isOPEN : false,
    onOpen:()=> set({ isOPEN:true}),
    onClose:()=>set({isOPEN:false})
 

}))
export default useRegisterModal;