import React from "react";

export default function HasilKomentar () {
    return(
        <>
        <div className="container-fluid mt-32 m-5">
        <h1 className="j-s-a  text-center">Komentar Terbaik <b className='text-green-500'>Zotemp App</b></h1>
        <div className="text-center mb-10">
                    <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
                    <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1"></span>
                    <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1"></span>
                </div>
        {/* isi nya */}
<div className="flex flex-wrap justify-center items-center h-52  overflow-y-auto">  


        <div className="w-full mx-auto rounded-lg bg-white border  border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                



                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>

                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                <img src="https://i.pravatar.cc/100?img=1" alt="" />
                            </div>
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie Edgar.</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    
                    
                        
        </div>
        
        </div>
        </>
    )
}