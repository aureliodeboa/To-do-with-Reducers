import { createContext } from "react";

type CountContextType = {
    onlineCount: number;
    setonlineCount: (n:number)=>void;
}

export const CountContext = createContext<CountContextType | null>(null);