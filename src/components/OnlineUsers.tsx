import { CountContext } from "@/contexts/CountContext"
import { count } from "console";
import { useContext } from "react"

export const OnlineUsers = () =>{
    const countCTX=  useContext(CountContext);
    const handleBannir= () =>{
        countCTX?.setonlineCount(0);
    }

    return(
        <>
        <p> Pessoas Online: {countCTX?.onlineCount}</p>
        <button onClick={handleBannir}>Banir todo mundo</button>
        </>
    )
}