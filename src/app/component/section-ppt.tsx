import React from "react";
import Image from "next/image";


// data gambar link
const pptaji = "https://drive.google.com/uc?export=view&id=1OhyT3QMiRisbx4TOEpG_qBx-q5Zu4AEp";
const ppt2 = "https://drive.google.com/uc?export=view&id=1azrIFxcjE7GBjb9uN0zWGljJ-Ok0OJb6";
const ppt3 = "https://drive.google.com/uc?export=view&id=1NaUVGQb5abdHFe6RnmkmZ1tKkDkHdQhV";
export default function SectionPpt () {
    return(
        <div className="container-lg mt-5">
            <div className="flex flex-col justify-center items-center md:px-0 px-4 text-center ">
        <h1 className="j-s-a">Template <b className='text-orange-500'>PPT Design</b></h1>
    </div>
    <div className="flex flex-wrap justify-center items-center">

<div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={pptaji} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">PPT 2021 Negosisasi  </h1>
        <p className="mt-2">Rp.5000</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
</div>

    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={ppt2} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">PPT Realistic Galaxy </h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
    </div>

    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={ppt3} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">PPT Small <br /> Bussines</h1>
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