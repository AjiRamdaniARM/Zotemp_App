
'use client'

import { useState } from "react";
import Logo1 from "../image/logo1.png";
import Link from "next/link";
import '../style/Styles2.scss';
import Menu from "../image/icon/menu-outline.svg";
import Close from "../image/icon/close.svg";
import Image from "next/image";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    return(
        
        <div>
        <nav className=" absolute md:p-5 p-2  bg-white w-full top-0  left-0 right-0 z-10  ">

          <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                <Image src={Logo1} alt="logoBrand" className="md:w-32 w-32  ml-5 md:ml-0  "></Image>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src={Close} width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src={Menu}  
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="  h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6  text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-green-900  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      Photoshop & Illustrator
                    </Link>
                  </li>
                  <li className="pb-6  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      PPT Design
                    </Link>
                  </li>
                  <li className="pb-6  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      Canva
                    </Link>
                  </li>
                  <li className="pb-6  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      CapCut
                    </Link>
                  </li>
                  <li className="pb-6  text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      Figma
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar;