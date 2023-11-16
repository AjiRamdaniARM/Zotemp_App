import React from "react";
import Image from 'next/image';

// data gambar link
const potoVector1 = "https://drive.google.com/uc?export=view&id=11xnFVtRAxpvFth0MocIdyahOmVh5XQ9T";
const potoPsd2 = "https://drive.google.com/uc?export=view&id=1cDIYIMP50I3GgLXAG4fVKemfs5tWrrxG";
export default function SectionPhAi () {
    return(
        <div className="container-lg mt-10">
            <div className="flex flex-col justify-center items-center md:px-0 px-4 text-center ">
        <h1 className="j-s-a">Template <b className='text-blue-500'>Photoshop & Illustrator</b></h1>
    </div>

    <div className="flex flex-wrap justify-center items-center">

<div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={potoVector1} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Poster Travel Vector</h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
</div>

    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={potoPsd2} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">PSD Digital Marketing </h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
    </div>

    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={potoVector1} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Poster Travel Vector</h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
    </div>
    
    
    
    </div>
<div className="flex justify-center items center mt-10">
    <button className="text-white text-md font-semi-bold bg-green-500 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
        Lihat Selengkapnya
    </button> 
</div>
        <br />
        <hr  />
         </div>
    )
}