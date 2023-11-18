import React from "react";
import Daun from "../image/daun.png";
import Image from "next/image";
import Daun1 from "../image/daun1.png";
export default function Elementbg () {
    return(
        <div className="container-fluid z-[-1px] absolute">
          {/* gambar daun hijau */}
            <Image src={Daun} className="relative top-[50px] left-[-110px] rotate-90 hidden md:block " alt="elementDaun" width={400}></Image>
            <Image src={Daun} className="relative top-[1px] left-[65em] rotate-[-90deg] hidden md:block 2xl:left-[88em] " alt="elementDaun" width={400}></Image>
            </div>
    )
}