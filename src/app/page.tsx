import SectionHero from "./component/section-hero1";
import SectionAcces from "./component/section-acces";
import SectionPhAi from "./component/section-ph-ai";
import SectionPpt from "./component/section-ppt";
import SectionCanva from "./component/section-canva";
import SectionCapcut from "./component/section.capcut";
import SectionFigma from "./component/section-figma";
import SectionHero2 from "./component/SectionHero2";
import HasilKomentar from "./component/hasil-komentar";
import React, {Suspense} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <div className="container-2xl  ">
        <SectionHero />
        <SectionAcces />
        <Suspense  fallback={ <Box sx={{display: 'flex', justifyContent: 'center' ,alignItems: 'center',marginTop: '70px' }}>
      <CircularProgress />
      </Box>  }>
        <SectionPhAi /> 
        <SectionPpt />
        <SectionCanva />
        <SectionCapcut />
        <SectionFigma />
        <SectionHero2 />
        <HasilKomentar />
        </Suspense>
  
      </div>
    </>
  );
}