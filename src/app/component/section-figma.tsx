import React from "react";

// data gambar link
const figma1 = "https://drive.google.com/uc?export=view&id=1b7gdGVsfYSUmV24GCnUedRcudmSYlZgP";
const figma2 = "https://drive.google.com/uc?export=view&id=1OaOWnDcTfNmdbsALGdESjIiMwxuZJdWV";
const figma3 = "https://drive.google.com/uc?export=view&id=1c-e7uBV4bQed_lZrcfapm1JKTS8xAweV";
export default function SectionFigma () {
    return(
        <div className="container-lg">
                         <div className="flex flex-col justify-center items-center md:px-0 px-4 mt-5     text-center ">
        <h1 className="j-s-a">Template <b className='text-green-500'>Figma Design </b></h1>
        <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                </div>
    </div>
    <div className="flex flex-wrap justify-center items-center">

<div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={figma1} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Figma Web <br />Online Course </h1>
        <p className="mt-2">Rp.free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
</div>
&nbsp;&nbsp; 
    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={figma2} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold"> Mobile Finace <br />App Design</h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
    </div>
    &nbsp;&nbsp; 
    <div className="col">
    <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={figma3} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Mobile Template <br /> Figma</h1>
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