import {create} from "zustand";

export type ILog = {
    date:Date;
    hours:number,
    note:string,
}
interface LogState{
    log:ILog;
    logs:{
        [key:string]:ILog
    }
    setLog:(log:ILog)=>void;
    setDate:(date:Date)=>void;
    setLogs:(log:ILog,key:string) => void
}

export const useLogStore = create<LogState>()((set)=>({
    log:{
        date:new Date(),
        hours:0,
        note:"",
    },
    logs:{},
    setDate: (date:Date) => set((state:any)=>({log:{...state.log,date}})),
    setLog: (log:ILog) => set((state:any)=>({log:{...state.log,...log}})),
    setLogs: (log:ILog,key:string) => set((state:any)=>({logs:{...state.logs,[key]:log}}))
}))

