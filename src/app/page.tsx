"use client"

import { Header } from "@/components/Header"
import { CountContext} from "@/contexts/CountContext"
import { useState } from "react";


export const Page =() =>{
  const[onlineCount,setonlineCount]= useState(92);
  return(
    <div>
      <CountContext.Provider value={{onlineCount,setonlineCount} }>
        <Header />
      </CountContext.Provider>
    </div>


  );
}

export default Page;