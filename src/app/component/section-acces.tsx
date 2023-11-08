import '../style/Styles2.scss';
import Image from 'next/image';
import Icon1 from "../image/icon1.png";
import Data from "../json/data.json";


export default async function SectionAccses() {
    const data1 = Data.dataOrang;
    return(
        <>
    <div className="flex flex-col justify-center items-center md:px-0 px-4 text-center ">
        <h1 className="j-s-a">What You Can Access</h1>
        <p>Our free Figma templates are divided into assorted sections.</p>
        </div>
          
        </>
    )
}

