import {create} from "zustand";

type Log = {
    date?:Date;
    note?:string,
    hours?:number,
}

export const useLogStore = create((set)=>({
    log:{
        date:new Date(),
        note:"",
        hours:0,
    },
    setLog: (log:Log) => set((state:any)=>({log:{...state.log,...log}})),
}))
