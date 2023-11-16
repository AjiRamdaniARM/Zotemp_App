import '../style/Styles2.scss';
import Image from 'next/image';
import Icon1 from "../image/icon1.png";
import Gif1 from "../image/gif1.gif";
import Gif2 from "../image/gif2.gif";
import Data from "../json/data.json";

export default async function SectionAccses() {
    const data1 = Data.dataOrang;
    return(
<div className='container-xl'>
    <div className="flex flex-col justify-center items-center md:px-0 px-4 text-center ">
        <h1 className="j-s-a">Keuntungan Pake <b className='text-green-500'>Zotemp</b></h1>
        <p>Cari template yang kamu butuhkan di website kami. ZotempLovers</p>
    </div>
    <div className="list-card flex justify-center items-center">
        <div className="max-w-sm rounded overflow shadow-lg">
           <Image src={Gif1} alt='gambarGif1' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-3 text-black">
                    Banyak Template yang disukai <div className='text-pink-500'>banyak orang</div> 
                </div>
            </div>
        </div>

        <div className="max-w-sm rounded overflow shadow-lg">
           <Image src={Gif2} alt='gambarGif1' className='w-[100%]' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-3 text-black">
                    Tersedia File Project siap download  <div className='text-green-500'>Original</div> 
                </div>
            </div>
        </div>

    </div>
</div>
    )
}

