import '../style/Styles2.scss';
import Image from 'next/image';
import Icon1 from "../image/icon1.png";
import Data from "../json/data.json";


export default async function SectionHero() {
    const data1 = Data.dataOrang;
    return(
        <>
    
            <div className=" container-lg px-4 flex md:flex-row flex-col justify-center items-center mt-[28%] md:mt-[6%] mx-auto m-5 ">
            {
                data1.map((Data) => (

                    <div className="content-text-j relative md:ml-10 md:mr-36 flex-col justify-center px-4 md:px-0  w-96 ">
                    <h1 className='md:text-4xl text-3xl text-gray-800 '>{Data.judul1} <div className="text-green-500">berbagai platform</div></h1>
                    <p className="Desk1 " >{Data.Desk1}</p>
                    <div className="Button-Style ">
                    <button className="bg-green-400 my-0 w-72 animate-bounce delay-300 h-10 hover:bg-gray-500  rounded-lg shadow-lg text-white mt-5">Browse Template</button>
                </div>
                </div>
            ))}
                
       
                <div className="gambar">
                <Image
                className='w-96 '
      src={Icon1}
      alt="Picture of the author"
    />
                </div>
                
            </div>
      
        </>
    )
}

