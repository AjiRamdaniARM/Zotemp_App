'use client'
import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Upload from "../image/flame-uploading.gif";


// data gambar link
const canvalogo1 = "https://drive.google.com/uc?export=view&id=1i-t3NUMPCCQC15zh5d-hPwQuahFYr4-M";
const canva2 = "https://drive.google.com/uc?export=view&id=1Ci2B47kPcLbc1R6UA8DvCdBmsBzwJsOk";
const canva3 = "https://drive.google.com/uc?export=view&id=1Robf3_50kluxXwSXiGl8jkPZXeoNQKec";
export default function SectionCanva () {
    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);
    const [Modal1, setModal1] = useState(false);
    return(
        <div className="container-lg mt-5">
                <div className="flex flex-col justify-center items-center md:px-0 px-4 text-center ">
        <h1 className="j-s-a">Template <b className='text-purple-500'>Canva Design</b></h1>
        <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-purple-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-purple-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-purple-500 ml-1"></span>
                </div>
    </div>
    <div className="flex flex-wrap justify-center items-center">

<div className="col">
{showModal ? (
            <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <h1 className="text-base mt-2 mx-4 text-black font-semibold text-center">

              Canva Logo Design
              </h1>
              <Image src={Upload} alt='gif-upload' className='w-full'></Image>
              <h2 className='mt-2 fw-bold'>Keterangan</h2>
             <table>
                <tr>
                    <td><h1 className='font-bold'>Harga </h1></td>
                    &nbsp;
                    <td>: Gratis  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>File Project </h1></td>
                    &nbsp;
                    <td>: Link  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>Sofware/Aplikasi </h1></td>
                    &nbsp;
                    <td>: Canva Desktop / Web  </td>
                </tr>
             </table>
              <div className="flex items-center justify-center">
                <button onClick={() => {
                    alert("Maaf Tidak bisa di akses masih demo")
                }} className='bg-green-400 px-8 h-10 text-white rounded-md shadow hover:bg-gray-500 font-semibold'>Download</button>
             &nbsp;&nbsp;&nbsp;
             
              <button
                className="my-5 w-auto px-8 h-10 bg-red-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={ () => {
                    const Cuba = document.querySelector('.cuba7');
                    Cuba?.classList.remove('hidden');
                    setShowModal(false)
                }}
              >
                Close
              </button></div>
            </div>
          ) : null}
    <div className=" cuba7 container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={canvalogo1} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Canva Logo <br />Design  </h1>
        <p className="mt-2">Rp.free</p>
            </div>
            <button onClick={() => {
                 setShowModal(true) 
               const Cuba = document.querySelector('.cuba7');
               Cuba?.classList.add('hidden');
            }} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
</div>
&nbsp;&nbsp; 
    <div className="col">
    {showSecondModal ? (
            <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <h1 className="text-base mt-2 mx-4 text-black font-semibold text-center">

              Canva Poster Summer
              </h1>
              <Image src={Upload} alt='gif-upload' className='w-full'></Image>
              <h2 className='mt-2 fw-bold'>Keterangan</h2>
             <table>
                <tr>
                    <td><h1 className='font-bold'>Harga </h1></td>
                    &nbsp;
                    <td>: Gratis  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>File Project </h1></td>
                    &nbsp;
                    <td>: Link  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>Sofware/Aplikasi </h1></td>
                    &nbsp;
                    <td>: Canva Desktop / Web  </td>
                </tr>
             </table>
              <div className="flex items-center justify-center">
                <button onClick={() => {
                    alert("Maaf Tidak bisa di akses masih demo")
                }} className='bg-green-400 px-8 h-10 text-white rounded-md shadow hover:bg-gray-500 font-semibold'>Download</button>
             &nbsp;&nbsp;&nbsp;
             
              <button
                className="my-5 w-auto px-8 h-10 bg-red-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={ () => {
                    const Cuba = document.querySelector('.cuba8');
                    Cuba?.classList.remove('hidden');
                    setShowSecondModal(false)
                }}
              >
                Close
              </button></div>
            </div>
          ) : null}
    <div className=" cuba8 container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={canva2} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Canva Poster <br />Summer</h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button onClick={() => {
                 setShowSecondModal(true) 
               const Cuba = document.querySelector('.cuba8');
               Cuba?.classList.add('hidden');
            }} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
        </div>
    </div>
    </div>
    &nbsp;&nbsp; 
    <div className="col">
    {Modal1 ? (
            <div className="container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <h1 className="text-base mt-2 mx-4 text-black font-semibold text-center">

              PPT Small
Bussines
              </h1>
              <Image src={Upload} alt='gif-upload' className='w-full'></Image>
              <h2 className='mt-2 fw-bold'>Keterangan</h2>
             <table>
                <tr>
                    <td><h1 className='font-bold'>Harga </h1></td>
                    &nbsp;
                    <td>: Gratis  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>File Project </h1></td>
                    &nbsp;
                    <td>: PPT  </td>
                </tr>
                <tr>
                    <td><h1 className='font-bold'>Sofware/Aplikasi </h1></td>
                    &nbsp;
                    <td>: Microsoft PowerPoint  </td>
                </tr>
             </table>
              <div className="flex items-center justify-center">
                <button onClick={() => {
                    alert("Maaf Tidak bisa di akses masih demo")
                }} className='bg-green-400 px-8 h-10 text-white rounded-md shadow hover:bg-gray-500 font-semibold'>Download</button>
             &nbsp;&nbsp;&nbsp;
             
              <button
                className="my-5 w-auto px-8 h-10 bg-red-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={ () => {
                    const Cuba = document.querySelector('.cuba9');
                    Cuba?.classList.remove('hidden');
                    setModal1(false)
                }}
              >
                Close
              </button></div>
            </div>
          ) : null}
    <div className="cuba9 container mx-auto p-9 m-2 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
       <img src={canva3} alt="Vector" />
        <div className="flex justify-between items-center">
            <div>
            <h1 className="mt-5 text-2xl font-semibold">Canva Feed <br /> Monday</h1>
        <p className="mt-2">Rp.Free</p>
            </div>
            <button onClick={() => {
                 setModal1(true) 
               const Cuba = document.querySelector('.cuba9');
               Cuba?.classList.add('hidden');
            }} className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Dapatkan</button>
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