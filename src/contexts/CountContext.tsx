import { createContext, ReactNode, useState } from "react";

type CountContextType = {
    onlineCount: number;
    setonlineCount: (n:number)=>void;
}

export const CountContext = createContext<CountContextType | null>(null);

type Props = {children :ReactNode}
export const CountProvider = ({children}: Props )=>{
    const[onlineCount,setonlineCount]= useState(45)
    return(
        <CountContext.Provider value={{onlineCount, setonlineCount}}>
            {children}
        </CountContext.Provider>
    )

}