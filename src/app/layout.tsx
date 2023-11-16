"use client";
import Navbar from "./component/navbar"
import Footer from "./component/footer"
import { useEffect, useState } from "react"
import Logo from "../app/image/logo1.png";
import Image from "next/image";
import SyncLoader from "react-spinners/SyncLoader";

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
 

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000 )
  },[])

  return (
    <html lang="en">
          {loading ?  (
           <center className="px-auto mx-auto">
            <Image src={Logo} alt="logoZotemp" className="w-52 md:w-96 2xl:w-82 mt-52" ></Image>
            <div className="  mt-72">
            <SyncLoader color="#05b311" /></div>
           </center>
          ): (
  <body>
        <Navbar />
        {children}
        <Footer />
        </body>
          ) }
    
    </html>
  )
}

