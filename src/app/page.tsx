"use client"

import { Header } from "@/components/Header"
import { CountProvider } from "@/contexts/CountContext";

export const Page =() =>{
  
  return(
    <div>
     <CountProvider>
      <Header/>
      </CountProvider>      
    </div>


  );
}

export default Page;