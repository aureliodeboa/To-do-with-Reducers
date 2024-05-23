"use client"

import { Header } from "@/components/Header"
import { CountContext, CountInitialData } from "@/contexts/CountContext"


export const Page =() =>{
  return(
    <div>
      <CountContext.Provider value={CountInitialData}>
        <Header />
      </CountContext.Provider>
    </div>


  );
}

export default Page;